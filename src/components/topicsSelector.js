
export default function TopicsSelector ({activeTopics, setActiveTopics}) {




// handle topic change:
  function handleTopicChange (e) {
        // console.log("🔴", e.target.value, e.target.checked);

        // filter data based on active topics:
        // const filteredDataByTopic = data.filter(item => activeTopics.includes(item.topic));
        // console.log("🔴filteredDataByTopic", filteredDataByTopic);
        // setData(filteredDataByTopic);



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


return (<div className="flex flex-col w-full text-center bg-red-0">

{/* topics checkboxes: */}
<h2 className="text-2xl font-bold my-5">Topics</h2>

{["business-strategy", "change-&-culture", "innovation-&-digital-information","personal-leadership-&-team-development"].map((item, index) => {
  return (
  <label key={index} className="rounded-full bg-[lightBlue] py-5 mb-2" id={item} onChange={handleTopicChange} value={item}>{item}
  <input type="checkbox" className="hidden topics" id={item} value={item}/>
  </label>
);})}

</div>)};