
export default function AZSwitch ({setAZSorting}) {

        function handleAZ(){

                setAZSorting(true);
        }


        function handleZA(){
                setAZSorting(false);

        }




return (<div className="w-3/4 flex justify-between ">

<input type="button" value="A-Z ⬇️" className="bg-gray-500 w-[45%]  text-white mx-1 rounded-full" onClick={handleAZ} id="az" />
<input type="button" value="Z-A ⬆️"  className="bg-gray-500 w-[45%] text-white mx-1 rounded-full" onClick={handleZA} id="za" />


</div>)};