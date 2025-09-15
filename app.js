let amigos = [];
let inputName = getElemetByClass("input-name");

function agregarAmigo(){    
    if(inputName.value == ""){
        alert("ingrese un nombre valido");
        return;
    }
    amigos.push(inputName.value);
    inputName.value = "";
    actualizarLista();
}

function actualizarLista(){
    getElemetByClass("name-list").innerHTML += `<ul>${amigos[amigos.length - 1]}</ul>`;
}

function sortearAmigo(){
    getElemetByClass("result-list").innerHTML = amigos[Math.floor((Math.random() * amigos.length))];
}

function getElemetByClass(className){
    return document.querySelector(`.${className}`);
}