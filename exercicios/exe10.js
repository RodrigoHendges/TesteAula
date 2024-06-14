

// Crie um algoritimo que receba 3 números variáveis ea partir dales crie uma estrutura condicional
// que retorne uma mensagem informando que existem dois ou mais números idênticos ou no caso 
//de todos os números serem diferentes retorne uma mensagem informando que não há numeros identicos.


const num1 = 5
const num2 = 4
const num3 = 4


const condicao1 = (num1 === num2) || (num1 === num3) || (num2 ===num3)
console.log("1.")
if (condicao1) {
    console.log(`${num1} , ${num2} e ${num3} existem dois ou mais números identicos!`)
} 
else{
    console.log(`${num1} , ${num2} e ${num3} não há numeros identicos!`)
}
console.log("")

// Crie um algoritimo que receba uma idade em variável e apartir dela crie uma estrutura condicional
// que retorne uma mensagem informando se é maior ou menor de idade 

let idade = 17

const maiorIdade = idade >= 18

console.log("2.")
if (maiorIdade) {
    console.log(`Maior de idade `)
} 
else{
    console.log(`menor de idade!`)
}

// Crie um algoritimo que receba 1 número em uma variável e a partir dele crie uma estrutura condicional
// que retorne uma mensagem informando se ele é impar ou par

const num5 = 20
const num4 = 2


const resto = num5 % num4
const igualZero = resto === 0

console.log("")
console.log("3.")
if (igualZero) {
    console.log(`Par`)
} 
else{
    console.log(`impar`)
}

