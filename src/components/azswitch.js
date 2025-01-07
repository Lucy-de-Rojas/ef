
export default function AZSwitch ({setAZSorting}) {

        function handleAZ(){

                setAZSorting(true);
        }


        function handleZA(){
                setAZSorting(false);

        }




return (<div className="w-3/4 flex flex-col lg:flex-row lg:justify-center  items-center">

<input type="button" value="A-Z ⬇️" className="bg-gray-500 w-[70%] lg:w-[45%] py-4 mb-2 lg:mb-0  text-white mx-1 rounded-full" onClick={handleAZ} id="az" />
<input type="button" value="Z-A ⬆️"  className="bg-gray-500 w-[70%] lg:w-[45%] py-4  text-white mx-1 rounded-full" onClick={handleZA} id="za" />


</div>)};