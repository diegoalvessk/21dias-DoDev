let array = []
let quantidadeArray = 0

quantidadeArray = prompt("Qual o tamanho do array?")

for (let index = 0; index < quantidadeArray; index++) {
    array[index] = prompt("informe um número")    
}

console.log(array)
console.log(array.reverse())
