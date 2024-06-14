

// Crie um laço de repetição que escreva os números de 1 a 100

console.log("Exercício 1 ")
for (let i = 1; i <=100; i++) {
    console.log(i)
    
}
//Crie um laço que imprima os numeros pares de 1 a 200

console.log("Exercício 2")
for(let i = 1; i <=200; i++) {

if (i % 2 === 0){
console.log(i)
}





}

// Crie um laço que imprima a tabuada do número 5
const tabuada = 5
console.log("Exercício 3 ")
for (let i = 1; i <=10; i++) {
console.log(`${i} x 5 = ${i *tabuada}`)
    
}

//Faça uma array com 6 números e apartir dele crie um laço que imprima cada número do array

const array = [ 7, 17, 27, 37, 47, 57 ]

console.log("Exercício 4")
for (let i = 0; i < array.length; i++) {

    console.log (array[i]);
}
