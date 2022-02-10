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
    semaforoStop();
    autoTexto();
}

const ligarAmarelo = () => {
    semaforo.src = './img/amarelo.png';
    semaforoStop();
    autoTexto();
}

const ligarVermelho = () => {
    semaforo.src = './img/vermelho.png';
    semaforoStop();
    autoTexto();
}

const desligar = () => {
    semaforo.src = './img/desligado.png';
    semaforoStop();
    autoTexto();
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

const recebeDesligado = () => {
    return semafaro.src.includes('desligado');
}

// Função para a troca de cores
const trocarCorAuto = () => {
    if(recebeDesligado) {
        ligarVerde;
    } else if (recebeVermellho) {
        ligarVerde;
    } else if (recebeVerde) {
        ligarAmarelo;
    } else {
        ligarVermelho;
    }
}

// Alterando texto botão auto
const autoTexto = () => {
    semAuto.textContent = 'Automático';
}

// Limpando o intervalo 
const semaforoStop = () => {
    clearInterval(idPiscar);
}

// Semaforo automatico
const ligarAuto = () => {
    if (semAuto.textContent == 'Automático') {
        idPiscar = setInterval(trocarCorAuto, 1000);
        semAuto.textContent = 'Parar';
    } else {
        semaforoStop();
        desligar();
        semAuto.textContent = 'Automático';
    }
}

// Adicionando os eventos
semVerde.addEventListener('click', ligarVerde);

semAmarelo.addEventListener('click', ligarAmarelo);

semVermelho.addEventListener('click', ligarVermelho);

semAuto.addEventListener('click', ligarAuto);

