export let mathAdd = (nr1, nr2) => {return nr1 + nr2;}
export let mathUnAdd = (nr1, nr2) =>{return nr1 - nr2;}
export let mathtimes = (nr1, nr2) =>{return nr1 * nr2;}
export let mathDiv = (nr1, nr2) =>{ return nr1 / nr2;}
export let totAddArr = (arrToCount) =>{
    return arrToCount.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
}
export let totProductOfArr = (arrToCount) =>{
    let productOfArr = 1;
    for (let index = 0; index < arrToCount.length; index++){
        // Store the counted index number and count the product with itself 
        productOfArr*= arrToCount[index];
    }
    return productOfArr;
}
export let getCategorieMargOrRest = (categorieBudget, currentCategorieBudget) =>{
    if(currentCategorieBudget < categorieBudget) return categorieBudget-currentCategorieBudget;    
    if(currentCategorieBudget > categorieBudget) return categorieBudget%currentCategorieBudget;
}