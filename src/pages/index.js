import Image from "next/image";
import { useEffect, useState } from 'react';





export default function Home() {



  const [data, setData] = useState([]);
  const [activeTopics, setActiveTopics] = useState([]);
  const [activeLearningFormats, setActiveLearningFormats] = useState([]);


  console.log("activeTopics 🔴", activeTopics);
  console.log("activeLearningFormats 🔴", activeLearningFormats);







// getting data from the server:
  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  },[]);



  // console.log(data);


// handle topic change:
  function handleTopicChange (e) {
    // console.log("🔴", e.target.value, e.target.checked);


    if(e.target.checked === true){
      setActiveTopics([...activeTopics, e.target.value]);
      e.target.parentElement.style.backgroundColor = 'blue';
      e.target.parentElement.style.color = 'white';
      e.target.parentElement.style.fontWeight = "bolder";

    }
    else{
      e.target.parentElement.style.backgroundColor = 'lightBlue';
      e.target.parentElement.style.color = 'black';
      e.target.parentElement.style.fontWeight = "normal";
      setActiveTopics(activeTopics.filter(item => item !== e.target.value));
    }




  }



  // handle learning format change:
  function handleLearningFormatChange (e) {
    console.log("🔴", e.target.value, e.target.checked);
    if(e.target.checked === true){
      setActiveLearningFormats([...activeLearningFormats, e.target.value]);
      e.target.parentElement.style.backgroundColor = 'green';
      e.target.parentElement.style.color = 'white';
    }
    else{
      setActiveLearningFormats(activeLearningFormats.filter(item => item !== e.target.value));
      e.target.parentElement.style.backgroundColor = 'lightGreen';
      e.target.parentElement.style.color = 'black';
    }
  }






  return (<div className="flex flex-col items-center justify-center px-16 bg-blue-200">

<h1 className="text-3xl font-extrabold">All programs</h1>
    <p>In-depth and immersive programs focused on the most critical leadership skills
and behaviors for today's world. We provide on-campus, online and blended
program options.</p>

{/* container */}
<div className="flex flex-row  justify-center w-full rounded-lg bg-white shadow-lg p-8">




{/* topics checkboxes: */}
<div className="flex flex-col w-1/3 text-center bg-red-200">
<h2 className="text-2xl font-bold my-5">Topics</h2>

{["Business Strategy", "Change & Culture", "Innovation & Digital Informatrion","Personal Leadership & Team Development"].map((item, index) => {
  return (
  <label key={index} className="rounded-full bg-[lightBlue] py-5 mb-2" id={item} onChange={handleTopicChange} value={item}>{item}
  <input type="checkbox" className="hidden" id={item} value={item}/>
  </label>
);})}




<h2 className="text-2xl font-bold mb-5 mt-10">Learning Formats</h2>

{["Virtual", "Residential", "Blended", "Self-Study"].map((item, index)=>{

  return (
  <label key={index} className="rounded-full bg-[lightGreen] py-5 mb-2" id={item} onChange={handleLearningFormatChange} value={item}>{item}
  <input type="checkbox" className="hidden" id={item} value={item}  />
  </label>)})





}



<input type="button" value="Reset Filters" className="bg-red-500 rounded-full py-5 mt-10 text-white font-bold text-2xl" />

</div>







<div className="w-2/3 bg-blue-300">results</div>

  </div></div>);}
