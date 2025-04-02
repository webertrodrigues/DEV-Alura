function conversor(){
    let valor_won = prompt('Digite o valor em Wons que deseja converter para Reais:')
    
    let conversao_reais = (valor_won * 3.88)/1000
    
    alert(conversao_reais.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}))
    
    let conversao_dolar = (valor_won * 0.6841)/1000
    
    alert(`O valor de Wons em Dólares é ${conversao_dolar.toLocaleString('pt-BR', {style: 'currency', currency:'USD'})}`)
    
    let conversao_euro = (valor_won * 0.6324)/1000
    
    alert(`O valor de Wons em Euros é ${conversao_euro.toLocaleString('pt-BR', {style: 'currency', currency:'EUR'})}`)
    }