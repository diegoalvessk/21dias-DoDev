class ToDo {
    constructor(texto, prioridade) {
      this.Texto = texto;
      this.Prioridade = prioridade;
      this.Feito = false; // Valor padrão
    }
  }
  
  function criarToDo(texto, prioridade, arrayToDos) {
    const novoToDo = new ToDo(texto, prioridade);
  
    if (!arrayToDos.some((todo) => todo.Texto === texto)) {
      arrayToDos.push(novoToDo);
    }
  
    return novoToDo;
  }
  
  function atualizarToDo(textoAntigo, textoNovo, arrayToDos) {
    const toDoIndex = arrayToDos.findIndex((todo) => todo.Texto === textoAntigo);
  
    if (toDoIndex !== -1) {
      arrayToDos[toDoIndex].Texto = textoNovo;
      return true;
    }
  
    return false;
  }
  
  function concluirToDo(texto, arrayToDos) {
    const toDo = arrayToDos.find((todo) => todo.Texto === texto);
  
    if (toDo) {
      toDo.Feito = !toDo.Feito;
      return true;
    }
  
    return false;
  }
  
  function excluirToDo(texto, arrayToDos) {
    const toDoIndex = arrayToDos.findIndex((todo) => todo.Texto === texto);
  
    if (toDoIndex !== -1) {
      arrayToDos.splice(toDoIndex, 1);
      arrayToDos.sort((a, b) => a.Prioridade - b.Prioridade);
      return true;
    }
  
    return false;
  }
  
  function pesquisarToDo(texto, arrayToDos) {
    return arrayToDos.some((todo) => todo.Texto.includes(texto));
  }
  
  function ordenarCrescente(arrayToDos) {
    return arrayToDos.sort((a, b) => a.Prioridade - b.Prioridade);
  }
  
  function ordenarDecrescente(arrayToDos) {
    return arrayToDos.sort((a, b) => b.Prioridade - a.Prioridade);
  }

  
const arrayToDos = [];

criarToDo("Estudar JavaScript", 2, arrayToDos);
criarToDo("Fazer exercícios", 1, arrayToDos);
criarToDo("Comprar mantimentos", 3, arrayToDos);

console.log(arrayToDos);

atualizarToDo("Fazer exercícios", "Fazer exercícios de matemática", arrayToDos);
console.log(arrayToDos);

concluirToDo("Estudar JavaScript", arrayToDos);
console.log(arrayToDos);

excluirToDo("Fazer exercícios de matemática", arrayToDos);
console.log(arrayToDos);

console.log(pesquisarToDo("JavaScript", arrayToDos));

console.log(ordenarCrescente(arrayToDos));

console.log(ordenarDecrescente(arrayToDos));
