'use strict'

// Definição de variaveis
const semaforo = document.getElementById('semaforo');
const vermelho = document.getElementById('vermelho');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');

const mudarVermelho = () => {
    semaforo.src = './img/vermelho.png';
    
}
    
const mudarAmarelo = () => {
    semaforo.src = './img/amarelo.png';
   
}
    
const mudarVerde = () => {
    semaforo.src = './img/verde.png';
   

}
    


vermelho.addEventListener('click', mudarVermelho);
amarelo.addEventListener('click', mudarAmarelo);
verde.addEventListener('click', mudarVerde);

