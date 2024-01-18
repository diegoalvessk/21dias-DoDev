let array = [10]
let num1 = 3

for (let index = 0; index < 10; index++) {
    array[index] = parseInt(Math.random() * (10 - 0) + 0) ;    
}

console.log(array)

let arrayIndices = []
let cont = 0

for (let index2 = 0; index2 < array.length; index2++) {
    if(num1 == array[index2]){
        arrayIndices[cont] = index2
        cont++
    }    
}

console.log(arrayIndices)