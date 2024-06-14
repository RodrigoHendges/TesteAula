//crie um array com alguns números
//Abaixo dele, crie uma variavel chamado soma e atribua o valor 0
//Agora crie um loop for of para este array e, usando a variavel soma, some todos os valores que estão dentro do array.


const meusNumeros = [10, 7, 4, 8, 21] 
let soma = 0

for (numero of meusNumeros) {
soma = soma  + numero

}
console.log(soma)