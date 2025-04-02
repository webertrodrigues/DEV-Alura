function conversor(){
let valor_minecoin = prompt('Digite o valor em Minecoins que deseja converter para Reais:')

let conversao_reais = (valor_minecoin * 9.86)/320

alert(`O valor de Minecoins em Reais é ${conversao_reais.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)

let conversao_dolar = conversao_reais * 0.1764

alert(`O valor de Minecoins em Dólares é ${conversao_dolar.toLocaleString('pt-BR', {style: 'currency', currency:'USD'})}`)

let conversao_euro = conversao_reais * 0.1629

alert(`O valor de Minecoins em Euros é ${conversao_euro.toLocaleString('pt-BR', {style: 'currency', currency:'EUR'})}`)
}