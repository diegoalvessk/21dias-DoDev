class Carro {
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
      this.nome = nome;
      this.potencia = potencia;
      this.velocidadeMaxima = velocidadeMaxima;
      this.aceleracao = aceleracao;
    }
  
    calcularTempoParaDistancia(distancia) {
      const resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
      return resultado;
    }
  }
  
  class Corrida {
    constructor(nome, tipo, distancia, participantes) {
      this.nome = nome;
      this.tipo = tipo;
      this.distancia = distancia;
      this.participantes = participantes;
      this.vencedor = null;
    }
  
    iniciarCorrida() {
      let menorTempo = Infinity;
      
      for (const participante of this.participantes) {
        const tempo = participante.calcularTempoParaDistancia(this.distancia);
        if (tempo < menorTempo) {
          menorTempo = tempo;
          this.vencedor = participante.nome;
        }
      }
  
      console.log(`A equipe vencedora da corrida em ${this.nome} é: ${this.vencedor}`);
    }
  }
  
  // Exemplo de uso:
  const carro1 = new Carro("Ferrari", 800, 350, 2.5);
  const carro2 = new Carro("Mercedes", 750, 330, 2.8);
  const carro3 = new Carro("McLaren", 780, 340, 2.6);
  
  const corridaF1 = new Corrida("Circuito de Monza", "Fórmula 1", 5000, [carro1, carro2, carro3]);
  corridaF1.iniciarCorrida();
  