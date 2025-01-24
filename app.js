// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;

    if (nuevoAmigo == '') {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        amigos.push(nuevoAmigo);
        document.getElementById('amigo').value = '';
        console.log(amigos);
        mostrarAmigos();
        return;
    }
    
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let index = 0; index < amigos.length; index++) {
        let li = document.createElement('li');
        li.textContent = amigos[index];
        listaAmigos.appendChild(li);   
    }
}

function sortearAmigo() {

    if (amigos.length == 0) {
       alert("No hay amigos en la lista."); 
       return;
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        listaAmigos.innerHTML = '';
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
        return
    }
   
}