/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
 */

const arr_uno = ['a','b','c'];
const arr_due = [1,2,3];
const arr_tre = []

function arr_uni(){
    arr_uno.forEach((element,index) => {
        arr_tre.push(arr_uno[index])
        arr_tre.push(arr_due[index])
    })
}

console.log(arr_uni());
console.log(arr_tre)