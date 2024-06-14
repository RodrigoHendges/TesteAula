
//IDENTICO (===)


//"1" === "2" //false , são diferentes
//"2" === "2" //true , são identicos
// 2 === "2" //false , tipo diferente

const condição1 = 1 === 2
console.log("IDENTICOS")
console.log(condição1)


//o valor que sai da comparação
// pode ser aguardado em uma variável
// nesse caso, condição1 === false

//IGUAL (==)

// "1" == "2" // false, são diferentes
// "2" == "2" // true, são identicos
// 2 == "2" // true, tipo iguais

const condição2 = 1 == 2
console.log("IGUAL")
console.log(condição2)
//o valor que sai da comparação
// pode ser aguardado em uma variável
// nesse caso, condição2 == false


// diferentes (!==)

// "1" !== "2" // true, são diferentes
// "2" !== "2" // false, são identicos
// 2 !== "2" // true, tipos diferentes

const condição3 = 1 !== 2
console.log("DIFERENTES")
console.log(condição3)

// maior (>e>=)

// 1 > 2 // false, porque 1 é menor que 2
// 2 > 2 // false, porque 2 é igual a 2
// 3 > 2 // true, porque  3 é maior que 2

const condição4 = 1 > 2
console.log("MAIOR")
console.log(condição4)

// 1 >= 2 // false, porque 1 é menor que 2
// 2 >= 2 // true, porque 2 é igual a 2
// 3 >= 2 // true, porque  3 é maior que 2

const condição5 = 1 >=1
console.log("MAIOR OU IGUAL")
console.log(condição5)


// MENOR (< e <=)

// 1 < 2 // true, porque 1 é menor que 2
// 2 < 2 // false, porque 2 é igual a 2
// 3 < 2 // false, porque  3 é maior que 2

const condição6 = 1 < 2
console.log("MENOR")
console.log(condição6)

// 1 <= 2 // true, porque 1 é menor que 2
// 2 <= 2 // true, porque 2 é igual a 2
// 3 <= 2 // false, porque 3 é maior que 2


const condição7 = 2 <= 2
console.log("MENOR OU IGUAL")
console.log(condição7)

