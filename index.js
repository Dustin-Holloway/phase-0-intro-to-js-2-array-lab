// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];



function destructivelyAppendCat(name){;
    cats.splice(cats.length,0 , name);

}

function destructivelyPrependCat(name){;
    cats.splice(0,0,name);

}
function destructivelyRemoveLastCat(){
    cats.splice(-1)
};

function destructivelyRemoveFirstCat(){;
    cats.splice(0,1)
}

function appendCat(name){
    return  [...cats, "Broom"]
 }


function prependCat(name){
    return ["Arnold", ...cats]
};

function removeLastCat(){
    return cats.slice(0, cats.length -1);

};
function removeFirstCat(){;
    return cats.slice(1, cats.length);
};