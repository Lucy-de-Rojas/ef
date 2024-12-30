import { useEffect, useState } from "react";
import Data from "@/components/data";
import Results from "@/components/results";
import TopicsSelector from "@/components/topicsSelector";
import LearningFormatsSellectors from "@/components/learningFormats";
import ResetButton from "@/components/resetButton";



export default function Home2 () {


        const [data, setData] = useState([]);
        const [filteredData, setFilteredData] = useState([]);

        const [activeTopics, setActiveTopics] = useState([]);
        const [activeLearningFormats, setActiveLearningFormats] = useState([]);





        useEffect(() => {
                fetch('/api/data')
                .then(response => response.json())
                .then(data => {setData(data)})
                .catch(error => console.error('Error fetching data:', error));


                const filteredData = data.filter(item =>
                        (activeTopics.length === 0 || activeTopics.includes(item.topic)) &&
                        (activeLearningFormats.length === 0 || item.learningFormats.some(format => activeLearningFormats.includes(format)))
                      );
                setFilteredData(filteredData);

                if(activeTopics.length==0 && activeLearningFormats.length == 0) {
                        setFilteredData(data);
                }

        }, [activeLearningFormats, activeTopics, data]);











return (<div>

<div className="conntentWrapper flex">


<div className="selectorsWrapper flex flex-col  w-1/3 rounded-lg bg-white shadow-lg p-8">

<TopicsSelector activeTopics={activeTopics} setActiveTopics={setActiveTopics} />

<LearningFormatsSellectors activeLearningFormats={activeLearningFormats} setActiveLearningFormats={setActiveLearningFormats} />


<ResetButton setActiveLearningFormats={setActiveLearningFormats} setActiveTopics={setActiveTopics} />
</div>




<div className="resultsWrapper w-3/4">
        {/* {(activeTopics.length==0 && activeLearningFormats.length==0) && <Results data={data} />} */}
        {/* {(activeTopics || activeLearningFormats) && <Results data={filteredData} />} */}
        <Results data={filteredData} />
        </div>


        </div>


</div>)};