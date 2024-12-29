
import { useState } from "react";



export default function FiltersButton ({data}) {

        const [buttonValue, setButtonValue] = useState("Show Filters");
        const [filtersShowing, setFiltersShowing] = useState(false);



        function handleShowHideFilters() {
                let selectors = document.getElementById("selectorsWrapper");

                if(!filtersShowing){
                        setButtonValue("Hide Filters")
                        setFiltersShowing(true);
                        selectors.style.left = 0;
                }
                else {
                        setButtonValue("Show Filters")
                        setFiltersShowing(false);
                        selectors.style.left = "-110%";
                }



        }






return (<label className="bg-red-600 lg:hidden text-white flex w-full py-5 justify-center font-bold mb-4">
        <input type="button" onClick={handleShowHideFilters} value={buttonValue +" (" +data + ")"} className=""/>

</label>)};