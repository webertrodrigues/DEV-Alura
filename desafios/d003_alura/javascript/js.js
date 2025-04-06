function jogar(){
    let rodada = 1
    let plataforma_quebra
    let escolha_jogador
    alert("Bem-vindo à ponte de cristal!!")
    alert("Será 3 rodadas onde você poderá escoolher entre: \n1 - Direita\n2 - Esquerda")
    alert("Se você escolher a plataforma quebra você perde!")
    alert("Que comece os jogos")
    while(rodada <= 3){
        alert(`Rodada ${rodada}`)
        plataforma_quebra = Math.floor(Math.random() * 2) + 1
        escolha_jogador = prompt("Escolha o ladoo em que se deseja ir:\n1 - Direita\n2 - Esquerda")
        
        if(escolha_jogador === 1 || escolha_jogador === 2 || escolha_jogador === 3){
            if(escolha_jogador != plataforma_quebra){
                alert(`Parabéns você passou pela ${rodada}° rodada!`)
                rodada++
            } else {
                alert("Você caiu, perdedor!")
                rodada = 5
            }
            console.log(plataforma_quebra)
        } else {
            alert("Essa escolha não faz parte do jogo!!")
            alert("Por tentar burlar o sistema, você perdeu!!")
            rodada = 5
        }
    }


    if(rodada == 4){
        alert("Você venceu o jogo!!")
    }
}