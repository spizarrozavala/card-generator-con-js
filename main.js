function pinta(numeroPinta=0){
numeroP = parseInt(numeroPinta);
// console.log(numeroP);
switch(numeroP){
    case 1: 
        return "♦";
    break;
    case 2:
        return "♠";
    break;
    case 3:
        return "♣";
    break;
    case 4:
        return "♥"
    break;
}
}

function pintasAleatoreas(){
    let pintaString = [];
    let numerosRandom = Math.floor((Math.random()*10%4)+1);
    let pintaRandom = pinta(numerosRandom);
    pintaString.push(pintaRandom);
    let header = document.querySelector(".card-header"); 
    header.innerHTML = pintaRandom; 
    let footer = document.querySelector(".card-footer");
    footer.innerHTML = pintaRandom;
    footer.style.transform = 'rotate(180deg)'
    // my elemento HTML
    if (numerosRandom == 1 || numerosRandom == 4){
        header.style.color = "red";
        header.style.fontSize = "120px"; 
        footer.style.color = "red";
        footer.style.fontSize = "120px"; 
    } else{
        header.style.color = "black";
        header.style.fontSize = "120px";
        footer.style.color = "black";
        footer.style.fontSize = "120px";
    }
    console.log(pintaString);
}

function numerosHTML(){
let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let numerosAleatoreos = Math.floor(Math.random()*numeros.length);
let body = document.querySelector(".card-body");
body.innerHTML=numeros[numerosAleatoreos];
// console.log(numeros[numerosAleatoreos]);
}


pintasAleatoreas();
