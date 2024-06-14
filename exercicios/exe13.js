
//1.Escreva um laço que imprima a tabuada de um número


let tabuada  = 7
let contador = 1

while (tabuada <= 70) {
console.log(tabuada)
contador++
tabuada = 7 * contador

   

}

//2.
const numeros = [11, 15, 18, 14, 12, 13]

    let maiorNumero = 0

for(let i = 0; i < numeros.length; i++) 
{
    let numeroAtual = numeros[i]
    console.log(numeroAtual)
    if (numeroAtual >= maiorNumero){
        maiorNumero = numeroAtual
    }
}
console.log(`O maior número do array é ${maiorNumero}`)

//3. 

const palavras = ["Oi ","sumido ","tudo ","bem? ","saudades "]
let resultado =""
for(let palavra of palavras){
    resultado += palavra;
}
console.log(resultado)



