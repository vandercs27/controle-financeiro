
let receita = document.querySelector("#sal")
let despesa1 = document.querySelector("#desp1")
let despesa2 = document.querySelector("#desp2")
let despesa3 = document.querySelector("#desp3")
let despesa4 = document.querySelector("#desp4")
let botao = document.querySelector(".btn")
let resposta = document.querySelector(".res")


function calcular (){

const sal =parseFloat(receita.value) || 0
const desp1 =parseFloat(despesa1.value) || 0
const desp2 =parseFloat(despesa2.value) || 0
const desp3 =parseFloat(despesa3.value) || 0
const desp4 =parseFloat(despesa4.value) || 0
const totalDespesas = desp1+desp2+desp3+desp4

const calculo = sal-totalDespesas

return resposta.textContent = `você recebeu ${sal}, suas despesas estão somadas no valor de ${totalDespesas}, e te sobrou ${calculo}`

}


botao.addEventListener("click", calcular)
