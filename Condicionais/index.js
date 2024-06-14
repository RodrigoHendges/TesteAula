
const condicao = true
if (condicao){
    console.log(`Entrei dentro do bloco IF`)
//tudo que está dentro das {} pertence 
// ao bloco if
}

if (condicao) {
    console.log(`condição verdadeira!`)
} 
else{
    console.log(`condição falsa!`)
}

//ELSE IF

const condicao1 = false
const condicao2 = true


if (condicao1){
    console.log(`estou no bloco if`)

} else if(condicao2){ 
    console.log(`estou no bloco  else if`)

}else {
    console.log(`estou no bloco  else`)

}

/////////////////////////////////////////

const saborDoSuco = "goiaba"

if( saborDoSuco === "pessego"){
    console.log(`Ok! Suco de pessego é bom`)
} else if( saborDoSuco === "goiaba"){
    console.log(`Muito obrigado, mas não vou querer o suco hoje!`)
} else if( saborDoSuco === "morango"){
    console.log(`Nem sabia que existia esse sabor...`)
} else {
    console.log (`Ótimo, finalmente um sabor diferente`)
}



