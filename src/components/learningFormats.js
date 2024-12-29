
export default function LearningFormatsSellectors ({activeLearningFormats, setActiveLearningFormats}) {


  // handle learning format change:
  function handleLearningFormatChange (e) {
        // console.log("🔴", e.target.value, e.target.checked);
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


return (<div className="flex flex-col w-full text-center bg-red-0">

{/* Learning Formats: */}
<h2 className="text-2xl font-bold mb-5 mt-10">Learning Formats</h2>

{["virtual", "online", "residential", "blended", "self-study" ].map((item, index)=>{

  return (
  <label key={index} className="rounded-full bg-[lightGreen] py-5 mb-2" id={item} onChange={handleLearningFormatChange} value={item}>{item}
  <input type="checkbox" className="hidden learningFormats" id={item} value={item}  />
  </label>)})





}

</div>)};