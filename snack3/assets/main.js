/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */

function gira(str){
    return str.split("").reverse().join("")
}

console.log(gira('prova'))