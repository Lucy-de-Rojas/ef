

import { useState } from "react";







export default function AZSwitch ({setAZSorting}) {


        function handleAZ(){
                setAZSorting(true);
        }


        function handleZA(){
                setAZSorting(false);

        }




return (<div className="w-1/2 flex justify-between">

<input type="button" value="A-Z ⬇️" className="bg-gray-500 w-1/2 text-white mx-5 rounded-full" onClick={handleAZ} />
<input type="button" value="Z-A ⬆️"  className="bg-gray-500 w-1/2 text-white mx-5 rounded-full" onClick={handleZA} />


</div>)};