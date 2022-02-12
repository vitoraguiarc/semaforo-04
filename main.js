'use strict'

// Definição de variaveis
const semaforo = document.getElementById('semaforo');
const semVerde = document.getElementById('verde');
const semVermelho = document.getElementById('vermelho');
const semAmarelo = document.getElementById('amarelo');
const semAuto = document.getElementById('automatico');
let idPiscar = null;

//Verificar se o semafaro esta ligado
const semaforoLigadoAuto = () => idPiscar != null;


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
    return semaforo.src.includes('verde');
}

const recebeAmarelo = () => {
    return semaforo.src.includes('amarelo');
}

const recebeVermellho = () => {
    return semaforo.src.includes('vermelho');
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

// Limpar interval
const limparInterval = () => {
    clearInterval(idPiscar);
    idPiscar = null;
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
semVerde.addEventListener('click', () => {
    if (semaforoLigadoAuto) {
        clearInterval(idPiscar)
        idPiscar = null
        semAuto.textContent = 'Automatico';
    }
    ligarVerde();
});

semAmarelo.addEventListener('click', () => {
    if (semaforoLigadoAuto) {
        clearInterval(idPiscar)
        idPiscar = null
        semAuto.textContent = 'Automatico';
    }
    ligarAmarelo();
});

semVermelho.addEventListener('click', () => {
    if (semaforoLigadoAuto) {
        clearInterval(idPiscar)
        idPiscar = null
        semAuto.textContent = 'Automatico';
    }
    ligarVermelho();
});

semAuto.addEventListener('click', ligarAuto);

