import { useEffect, useState } from "react";

//
import Results from "@/components/results";
import TopicsSelector from "@/components/topicsSelector";
import LearningFormatsSellectors from "@/components/learningFormats";
import ResetButton from "@/components/resetButton";
import FiltersButton from "@/components/filtersButton";
import TopHeader from "@/components/topHeader";

import { sortingAZ, sortingZA } from "../../utils/sorting";




export default function Home2 () {


        const [data, setData] = useState([]);
        const [filteredData, setFilteredData] = useState([]);
        const [azSorting, setAZSorting] = useState(true);

        const [activeTopics, setActiveTopics] = useState([]);
        const [activeLearningFormats, setActiveLearningFormats] = useState([]);





        useEffect(() => {

                console.log("az sorting in useEffects 🔴", azSorting)
                fetch('/api/data')
                .then(response => response.json())
                .then(data => {

                        if(azSorting){
                                data.sort(sortingAZ);
                        }
                        else {
                                data.sort(sortingZA);
                        }

                     setData(data);

                })
                .catch(error => console.error('Error fetching data:', error));



                // NO filtered data:
                if(activeTopics.length==0 && activeLearningFormats.length == 0) {

                  setData(data);
          }

        //   filtered data:
                const filteredData = data.filter(item =>
                        (activeTopics.length === 0 || activeTopics.includes(item.topic)) &&
                        (activeLearningFormats.length === 0 || item.learningFormats.some(format => activeLearningFormats.includes(format)))
                      );

                if(azSorting){ filteredData.sort(sortingAZ)}
                else {filteredData.sort(sortingZA)}

                setFilteredData(filteredData);

                if(activeTopics.length==0 && activeLearningFormats.length == 0) {
                        setFilteredData(data);
                }

        }, [activeLearningFormats, activeTopics, azSorting,data]);






return (<div>

  <TopHeader />

<FiltersButton data={filteredData.length} />


<div className="contentWrapper flex px-5">


{/* filters: */}
<div className="flex flex-col w-full absolute left-[-110%] lg:static lg:w-1/3 lg:mr-5 bg-white" id="selectorsWrapper">

<TopicsSelector activeTopics={activeTopics} setActiveTopics={setActiveTopics} />

<LearningFormatsSellectors activeLearningFormats={activeLearningFormats} setActiveLearningFormats={setActiveLearningFormats} />


<ResetButton setActiveLearningFormats={setActiveLearningFormats} setActiveTopics={setActiveTopics} />
</div>





{/* results: */}
<div className="resultsWrapper w-full lg:w-2/3">

        <Results data={filteredData} setAZSorting={setAZSorting} />

        </div>


        </div>


</div>)};