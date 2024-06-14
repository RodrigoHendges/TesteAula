//1º O jogador deve escolher entre pedra, papel e tesoura

//2º Um segundo valor deve ser selecionado  para que o jogo seja realizado (um segundo valor de entrada em valor sorteado)

// 3º O sistema irá comparar os valores e determinar o vencedor 

// 4º O sistema deverá perguntar se o (s) jogador(es) quem jogar novamente. Se sim o jogo recomeçara. 

const valores =["pedra","papel","tesoura"]
let resposta
do{
console.log("Vamos jogar: Escolha sua arma\n[0] Pedra\n[1] papel\n [2] Tesoura")
let jogador = Number (prompt("Faça sua escolha"))
jogador = valores[jogador]

let bot = Math.floor(Math.random()*3)
console.log(bot)
bot = valores[bot]

console.log("você escolheu" + jogador + "\n Seu adversario escolheu"+bot)
alert(bot)

if(jogador===bot){
    console.log("empate")
}else if((jogador==='pedra' &&bot==='tesoura')|| (jogador ==='papel'&&bot==='pedra')||(jogador ==='tesoura'&&bot === 'papel')){
console.log("você venceu!")
}else {
    console.log("você perdeu!")

}

resposta = prompt ("deseja jogar novamente?[S/N]")

resposta = resposta.toUpperCase()

}while(resposta===`S`)
