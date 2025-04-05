function jogar(){
    let idade = prompt("Qual é a sua idade?")
    if(idade >= 18){
        alert("Bora jogar!!")
        alert("Vamos 3 partidas de ganhos")
        let ganho_jogador = 0 //CONTAGEM DE GANHO DO JOGADOR
        let ganho_camputador = 0 //CONTAGEM DE GANHO DA MAQUINA
        let partidas = 0 //CONTAGEM DA PARTIDA
        
        //CICLO DE REPETIÇÃO DE TRÊS RODADAS GANHAS
        while(partidas < 3){
            let escolha_jogador = prompt("Digite: \n1 - ÁGUA\n2 - PLANTA\n3 - FOGO") //ESCOLHA DO JOGADOR

            let escolha_computador = Math.floor(Math.random() * 3) + 1
                //ESCOLHA DO COMPUTADOR
                if(escolha_computador == 1){
                    alert(`Eu vou colocar ÁGUA`)
                } else if(escolha_computador == 2){
                    alert(`Eu vou colocar PLANTA`)
                } else {
                    alert(`Eu vou colocar FOGO`)
                }
            
            if(escolha_jogador == 2 && escolha_computador == 1 || escolha_jogador == 3 && escolha_computador == 2 || escolha_jogador == 1 && escolha_computador == 3)/*POOSSÍVEIS GANHOS DO JOGADOR*/{
                alert("Parabéns você ganhou!!")
                partidas++
                ganho_jogador++
                alert(`O jogo está ${ganho_jogador} x ${ganho_camputador}`)
            } else if(escolha_computador == 2 && escolha_jogador == 1 || escolha_computador == 3 && escolha_jogador == 2 || escolha_computador == 1 && escolha_jogador == 3)/*POOSSÍVEIS GANHOS DO JOGADOR*/{
                alert("Não foi dessa vez, tente novamente!")
                partidas++
                ganho_camputador++
                alert(`O jogo está ${ganho_jogador} x ${ganho_camputador}`)
            } else /*RESTANTE COMO EMPATE*/{
                alert("Boa tentativa dessa vez foi empate!")
                alert(`O jogo está ${ganho_jogador} x ${ganho_camputador}`)
            }
        }

        //DECLARANDO O GANHADOR
        if(ganho_camputador > ganho_jogador){
            alert("Eu fui o ganhador dessa vez, mas não se preocupe podemos ter uma revanche")
        } else {
            alert("Você é o vencedor da partida, parabéns, até uma próxima jogada")
        }
    } else {
        alert("Dessa vez não, você é menor de idade.")
    }
}