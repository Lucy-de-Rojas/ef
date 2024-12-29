
export default function ResetButton ({setActiveTopics, setActiveLearningFormats}) {


  function handleResetFilters(){
        setActiveTopics([]);
        setActiveLearningFormats([]);

        document.querySelectorAll('.topics').forEach(item => {
          item.checked = false;
          item.parentElement.style.backgroundColor = 'lightBlue';
          item.parentElement.style.color = 'black';
          item.parentElement.style.fontWeight = "normal";
        });

        document.querySelectorAll('.learningFormats').forEach(item => {
          item.checked = false;
          item.parentElement.style.backgroundColor = 'lightGreen';
          item.parentElement.style.color = 'black';
        });
      }


return (<div className="flex flex-col">

{/* reset button: */}
<input type="button" value="Reset Filters" className="bg-red-500 rounded-full py-5 mt-10 text-white font-bold text-2xl" onClick={handleResetFilters} />


</div>)};