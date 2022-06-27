let precoRefrigerante = prompt("Digite o valor do Refrigerante")
let quantidadeRefrigerante = prompt("Quantas Unidades ?")
let totalRefrigerante = precoRefrigerante * quantidadeRefrigerante


let precoMacarrao = prompt("Digite o valor do macarrão")
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))
let totalMacarrao = precoMacarrao * quantidadeMacarrao


let precoErvilha = prompt("Digite o valor da ervilha")
let quantidadeErvilha = prompt("Quantas Unidades ?")
let totalErvilha = precoErvilha * quantidadeErvilha


let precoArroz = prompt("Digite o valor do arroz")
let quantidadeArroz = prompt("Quantas Unidades ?")
let totalArooz = precoArroz * quantidadeArroz


let precoFeijao = prompt("Digite o valor do feijão")
let quantidadeFeijao = prompt("Quantas Unidades ?")
let totalFeijao = precoFeijao * quantidadeFeijao


let precoVinho = prompt("Digite o valor do vinho")
let quantidadeVinho = prompt("Quantas Unidades ?")
let totalVinho = precoVinho * quantidadeVinho

let totalGeral = totalRefrigerante + totalMacarrao + totalErvilha + totalArooz + totalFeijao

if (totalGeral % 2 == true) {
    alert(`$ Você pagará somente a metade: ${(totalGeral / 2)} e seu amigo a metade mais o valor do vinho.: ${(totalGeral + totalVinho)}`)
} else {
    alert(`$ Cada amigo deverá pagar metade do valor total da compra, incluindo o vinho: ${(totalGeral + totalVinho)}`)
}