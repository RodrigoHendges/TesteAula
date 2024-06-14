
//Crie um algoritimo que receba 3 numeros em variáveis e a partir deles crie uma condicional que retone true caso 2 desses números sejam idênticos.
const num1 = 2
const num2 = 2
const num3 = 3


const condicao1 = (num1 === num2) || (num1 === num3) || (num2 === num3)

console.log(`1.Os valores   ${num1}, ${num2} e ${num3} algum deles é identico? ${condicao1}`)

//Crie um algoritimo que receba 3 números em variáveis e a partir deles crie condicional que retorne true caso o primeiro número seja o maior dos 3

const num4 = 17
const num5 = 7
const num6 = 1

const condicao2 = (num4 > num5) && (num4 > num6)
console.log(`2. o valor ${num4} é maior que os valores ${num5} e ${num6}? ${condicao2}`)

//Crie um algoritimo que receba uma idade uma em variavel  e a partir dela crie uma condicional que retorne true caso seja maior de idade 


let idade = 19
const maiorIdadede = 18
const condicao3 = maiorIdadede <= idade
console.log(`3. João é maior de idade? ${condicao3}`)

//Crie um algoritimo que receba 1 número em uma variável e a partir dele crie uma condicional que retorne true caso o número seja par

const num7 = 20
const num8 = 5


const resto = num7 % num8
const igualZero = resto === 0
console.log(`4. O valor é par do resto da divisão? ${igualZero}`)




