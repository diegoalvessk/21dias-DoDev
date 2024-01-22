class Aluno {
    nome
    idade
    areaAtuacao

    constructor(nome, idade){
        this.nome =  nome
        this.idade  = idade
    }
}

console.log("Cadastro de Alunos")
let alunos = []
let continuar = true
let indexAlunos = 0

while(continuar){
    let nome = prompt("Informe o nome do aluno")
    let idade = parseInt(prompt("Informe a idade do Aluno"))
    let aluno = new Aluno(nome, idade)
    alunos[indexAlunos] = aluno
    indexAlunos++

    let desejaContinuar = prompt("Deseja continuar? s ou n")

    if(desejaContinuar == "s"){
        continuar = true
    }else{
        continuar = false
    }
}