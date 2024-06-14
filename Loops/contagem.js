
//o for precisa ser usado para percorrer arrys e fazer algo


const numeros =[1, 8, 12, 20, 35, 99, 100 , 111]
for (let i =0; i < numeros.length; i++ ){

    console.log(numeros[i])
}
// Crie uma contagem regressiva usando for, A diferença é que o numero vai ser fornecido pelo usuário do comando readline.

const readlineSync = require('readline-sync');



for(let bomba =readlineSync.question('contagem regressiva'); bomba  >= 0; bomba-- ){
    console.log(bomba)

}


const arrayNumeros = [10, 3, 4, 5, 56] 

/*
for ( let i = 0; i = numeros.lenght; i++)
console.log (números[i])
}

*/

//para cada número do meu array de números, imprima o valor de número
console.log("for of")
for (numero of arrayNumeros) {
console.log(numero)

}