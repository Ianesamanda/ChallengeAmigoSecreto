let inputAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

let amigos = [];

function adicionarAmigo() {
    let nome = inputAmigo.value;
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);

    let li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);

    inputAmigo.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione algum nome antes de sortear.");
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * amigos.length);
    resultado.textContent = `O amigo secreto é: ${amigos[nomeSorteado]}`;
}
