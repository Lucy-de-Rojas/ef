export function sortingAZ (a,b) {
        console.log("utils sorting 🔴")
        if(a.title < b.title){ return -1;}
        if(a.title > b.title){ return 1;}
        return 0;
}


export function sortingZA (a,b) {
        console.log("utils sorting 🔴")
        if(a.title > b.title){ return -1;}
        if(a.title < b.title){ return 1;}
        return 0;
}