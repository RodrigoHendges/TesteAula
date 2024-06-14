//template strings

const nome = "Rodrigo"
const idade = 28

//const frase = ` olá meu nome $(nome) é  e tenho $(idade) anos`



//prototipos de strings 

//propriedades 

//console.log(nome.length)

//const propriedade = nome.length


//metodos

//console.log(nome.toLocaleUpperCase())

//const propriedade = nome.toLocaleUpperCase()

///lenght 

console.log(nome.length)

console.log(`A variavel nome tem ${nome.length} caracteres`)

//tolowercase

console.log(nome.toLowerCase())


const palavra = "Oiiiiiiiii"

console.log(nome.toLocaleUpperCase())

console.log(palavra.toUpperCase())

//trim


let email = "     rdhendges@gmail.com    "

email = email.trim()
console.log(email.length)

console.log(email.trim())


//includes


const frase = "hoje eu comi batata"

console.log(frase.includes("batata"))


const fruta = "mamão"
console.log(`Na frase a palavra ${fruta} foi encontrada? ${frase.includes("mamão")}`)


//replaceall

const texto = "Hoje eu comi cenoura, adoro cenoura"

const novoTexto = texto.replaceAll("batata", "cenoura")


console.log(novoTexto)

const texto2 = "Estou com fome, mas com muita saudade"

const novoTexto2 = texto2.replaceAll("fome", "saudade")

console.log(novoTexto2)