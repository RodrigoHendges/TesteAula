
//Crie três variáveis que guardem números

//Para cada pergunta crie uma variavél que armazena a condição e imprima na tela a pergunta e condição
const num1 = 1
const num2 = 2
const num3 = 3


//1.

const condicao1 = (num1 === num2) && (num1 > num3)


console.log(`1. O ${num1} é identico ao ${num2} e o ${num1} é maior que o ${num3}? ${condicao1}`)

//2.

const condicao2 = (num1 !== num2) || (num1 <= num3)

console.log(`2. O ${num1} é diferente do ${num2} ou o ${num1} é menor igual do que o ${num3}? ${condicao2}`)

//3

const condicao3 = (num3 > num2) && (num3 < num1)

console.log(`3. O ${num3} é maior que o ${num2} e o ${num3} é menor que o ${num1}? ${condicao3}`)
