import AZSwitch from "./azswitch"


export default function Results ({data, setData, filteredData, setFilteredData, setAZSorting, azSorting}) {

        function handleAZ () {

               const sortedData =  data.sort((a,b) => {
                        if(a.title > b.title){ return -1;}
                        if(a.title < b.title){ return 1}
                        return 0;
                });




        }




return (<div className="resultsListing">


        <div className="text-2xl font-bold text-center pb-4 flex justify-between">



               <span className="flex items-center"> Results: {data.length}  </span>


                {/* AZ sorting buttons: */}
               <AZSwitch setAZSorting={setAZSorting}  />



                </div>

        <div className="">


                {data.map((item, index) => {
                        return<div className="wrapperForResults" key={index}>

                                <div className="itemWrapper bg-purple-200 my-6 py-7 rounded-lg px-5 shadow-md">


                                        <div className="titleSection flex flex-row justify-between">
                                        <span className="font-bold"> {item.title}</span>  {item.bestseller && <span className="text-right"> 🔥 Bestseller </span>}</div>





{/* spacer: */}
<div className="spacer"> <hr  className="h-3/4 bg-black rounded-full mb-4 mt-1"/></div>


<div className="bottomSection flex flex-col lg:flex-row lg:justify-between">
<div className="topicWrapper">
   {item.topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

  </div>

<div className="learningFormatsWrapper flex flex-row">

{item.learningFormats.map((format, index) => (
  <span key={index} className="">
    {format.charAt(0).toUpperCase() + format.slice(1)}
    {index < item.learningFormats.length - 1 && <span> • </span>}
  </span>
))}

</div>


</div>




                                </div>
                        </div>
                })}




        </div>







</div>)}