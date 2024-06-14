

const listaDeCompras = ["batata", "cenoura", "tomate"]

const listaDaLoteria = [2, 4, 11, 22, 35, 67]

const Bolleans = [true, false, false]

const listaVariada = [5, "cinco", true]

console.log(listaDeCompras[2])

console.log(listaVariada[1])

console.log(listaVariada[0] + 1)

///////////////////////

//Protótipo de Arrays

//lenght

console.log(listaDeCompras.length)

//Includes

const seriesBoas = ["Breaking Bad", "Broklyn-nine"]

seriesBoas.includes("Breaking Bad") //true
seriesBoas.includes("Game of thrones") //false

console.log(seriesBoas[1])

console.log(listaDaLoteria.includes(4))


console.log(listaDaLoteria)


//push

const numeros = [1, 2, 3]

//console.log(numeros)

numeros.push(4)
//console.log(numeros) // [1, 2, 3, 4]

numeros.push(5, 6, 7)
console.log(numeros) //[1, 2, 3, 4, 5, 6, 7]


//pop

const meusPeixes = ["palhaço", "mandarim", "esturjão"]

meusPeixes.pop()

console.log(meusPeixes) // ("palhaço", "mandarim")

listaDeCompras.pop()

console.log(listaDeCompras)


//SPLICE

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
//indices (1)    0    1    2    3    4    5    6    7

letras.splice(2, 1)
//     letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// indices (1)    0    1    2    3    4    5    6    7

letras.splice(3, 2)
//     letras = ["A", "B", "D", "E", "F", "G", "H]

listaDaLoteria.splice(1,2)


console.log(letras)
console.log(listaDaLoteria)
