export function sortingAZ (a,b) {
        // console.log("utils sorting 🔴")
        if(a.title < b.title){ return -1;}
        if(a.title > b.title){ return 1;}
        return 0;
}


export function sortingZA (a,b) {
        // console.log("utils sorting 🔴")
        if(a.title > b.title){ return -1;}
        if(a.title < b.title){ return 1;}
        return 0;
}


export function highLightAZ () {
        let az = document.getElementById("az");
        let za = document.getElementById("za");
        az.style.backgroundColor = "red";
        za.style.backgroundColor = "grey";
}


export function highLightZA () {

        let az = document.getElementById("az");
        let za = document.getElementById("za");
        az.style.backgroundColor = "grey";
        za.style.backgroundColor = "red";

}

