let personagens = ["", "", ""]
let personagens_forcas = []
let soma_forcas_personagens = 0
let viloes_escolhidos = ["", "", ""]
let viloes_forcas = []
let soma_forcas_viloes = 0
let viloes
let Sorteio = []
//Selecionar Personagens
for(let i=0; i<3; i++){
    personagens[i] = prompt("Digite o nome do seu personagem: ")

    //Sortear a forcas dos personagens e somar
    personagens_forcas[i] = Math.floor(Math.random() * 10) + 1
    console.log(`O personagem ${personagens[i]} tem uma força de ${personagens_forcas[i]}`)
    soma_forcas_personagens += personagens_forcas[i]
}
console.log(`A soma das força é: ${soma_forcas_personagens}`)
//Sortear viloes unicoamente
while(Sorteio.length < 3){
    let Sorteio_num = Math.floor(Math.random() * 10)

    if(Sorteio.indexOf(Sorteio_num) === -1){
        Sorteio.push(Sorteio_num)
    }
}

console.log("")

//Selecionar Viloes
for(let i=0; i<3; i++){
    viloes = ["Sephiroth", "Darth Vader", "Coringa", "Voldemort", "Homelander", "Hades", "Freeza", "GLaDOS", "Magneto", "Vecna"]
    viloes_escolhidos[i] = viloes[Sorteio[i]]

    //sortear as forcas dos viloes e somar
    viloes_forcas[i] = Math.floor(Math.random() * 10) + 1
    console.log(`O vilao ${viloes_escolhidos[i]} tem uma força de ${viloes_forcas[i]}`)
    soma_forcas_viloes += viloes_forcas[i]
}
console.log(`A soma das força é: ${soma_forcas_viloes}`)
//Saber que ganhou em forca

if(soma_forcas_personagens > soma_forcas_viloes){
    alert("Parabéns você ganhou dos vilões!!")
} else if (soma_forcas_personagens == soma_forcas_viloes){
    alert("Vamos considerar esse embate um empate, da próxima vez você perderá!!")
} else {
    alert("Você perdeu feio para nós, em, HAHAHA!")
}
