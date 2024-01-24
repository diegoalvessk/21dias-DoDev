class Carro{
    nome 
    potencia 
    velocidadeMaxima
    aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    tempo(distancia){
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado
    }
}

let carro = new Carro("Ferrari" , 300 , 400 , 3)

console.log("O tempo que o carro percorre essa distância é " + (carro.tempo(1000)) + " segundos")