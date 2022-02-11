'use strict'

// Definição de variaveis
const semaforo = document.getElementById('semaforo');
const semVerde = document.getElementById('verde');
const semVermelho = document.getElementById('vermelho');
const semAmarelo = document.getElementById('amarelo');
const semAuto = document.getElementById('automatico');
let idPiscar = null;

// Funções que alteram a cor do semafaro
const ligarVerde = () => {
    semaforo.src = './img/verde.png';
}

const ligarAmarelo = () => {
    semaforo.src = './img/amarelo.png';
}

const ligarVermelho = () => {
    semaforo.src = './img/vermelho.png';
}

// Verificação de cor do semafaro
const recebeVerde = () => {
    return semafaro.src.includes('verde');
}

const recebeAmarelo = () => {
    return semafaro.src.includes('amarelo');
}

const recebeVermellho = () => {
    return semafaro.src.includes('vermelho');
}

// Função para a troca de cores
const trocarCorAuto = () => {
    if(recebeVerde()) {
        ligarAmarelo();
    } else if (recebeAmarelo()) {
        ligarVermelho();
    } else if (recebeVermellho()) {
        ligarVerde();
    } else {
        ligarVerde();
    }
}

// Semaforo automatico
const ligarAuto = () => {
    if (idPiscar == null) {
        idPiscar = setInterval(trocarCorAuto, 1000);
        semAuto.textContent = 'Parar';
    } else {
        clearInterval(idPiscar);
        semAuto.textContent = 'Automatico';
        idPiscar = null;
    }
}

// Adicionando os eventos
semVerde.addEventListener('click', ligarVerde);

semAmarelo.addEventListener('click', ligarAmarelo);

semVermelho.addEventListener('click', ligarVermelho);

semAuto.addEventListener('click', ligarAuto);

