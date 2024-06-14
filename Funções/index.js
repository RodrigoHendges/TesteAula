

//funções
console.log("funções")
console.log("")
console.log("função ex: Imprimir Olá Mundo")
function imprimirOlaMundo() {
console.log("Olá mundo!")//parâmetros
    
}
imprimirOlaMundo()//argumentos

console.log("")
console.log("função ex: Área")
function calcularArea(altura,largura) {
    const area = altura * largura
    console.log(area)
}
calcularArea(5,6)


//ESCOPO


const num = 10
function func1(){ 

const num2 =5

    function func2(){
console.log(num2)
    }
}

//RETORNO 

function calcularArea1(altura, largura){
    const area = altura * largura 
    return area
    }
//todo código após o return será ignorado

const area = calcularArea1 (2,3)