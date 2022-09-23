export let mathAdd = (nr1, nr2) => {return nr1 + nr2;}
export let mathUnAdd = (nr1, nr2) =>{return nr1 - nr2;}
export let mathtimes = (nr1, nr2) =>{return nr1 * nr2;}
export let mathDiv = (nr1, nr2) =>{ return nr1 / nr2;}
export let fullyTotArr = (arrToCount) =>{
    return arrToCount.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
}
