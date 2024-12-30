

import { useState } from "react";







export default function AZSwitch ({data, filteredData}) {


        function handleAZ(){



                // alert("az");
                console.clear();
                data.sort((a,b) => {

                        if(a.title > b.title){
                                return -1;
                        }
                        if(a.title < b.title){
                                return 1;
                        }
                        return 0;

                });






        }


        function handleZA(){




        }




return (<div className="w-1/2 flex justify-between">

<input type="button" value="A-Z ⬇️" className="bg-gray-500 w-1/2 text-white mx-5 rounded-full" onClick={handleAZ} />
<input type="button" value="Z-A ⬆️"  className="bg-gray-500 w-1/2 text-white mx-5 rounded-full" onClick={handleZA} />


</div>)};