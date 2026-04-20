const prompt = require('prompt-sync')();
let saldo_inicial = 100
let extrato = []
let menu = 0

//// 
let qtd_saques = 0
let qtd_depositos = 0
let total_depositos = 0
let total_sacado = 0

while (menu !== 5) {
    console.log("1- consultar saldo");
    console.log("2- depositar");
    console.log("3- sacar");
    console.log("4- ver extrato");
    console.log("5- sair");
    menu = Number(prompt("Escolha:"));
    switch (menu) {
        case 1:
            console.log("saldo de" + saldo_inicial)

            break;

        case 2:
    qtd_depositos = Number(prompt("digite o valor deposito"))
    if (qtd_depositos > 0) {

        saldo_inicial += qtd_depositos
        total_depositos += qtd_depositos
        extrato.push(`Depósito: +${qtd_depositos}`)

        console.log("saldo atualizado:", saldo_inicial)
    }
    else {
        console.log("erro")
    }
    break;

        case 3:
    qtd_saques = Number(prompt("digite o valor do saque"))
    if (qtd_saques > 0) {

        if (qtd_saques <= saldo_inicial) {
            saldo_inicial -= qtd_saques
            total_sacado += qtd_saques
            extrato.push(`Saque: -${qtd_saques}`)

            console.log("valor disponivel", saldo_inicial);
        } else {
            console.log("saldo insuficiente");
        }
    }
    break;
        case 4:
            if (extrato.length === 0) {
                console.log("não foram realizadas movimentações")
            }
            else {
                console.log("extrato")
                for (let i = 0; i < extrato.length; i++) {

                    console.log(extrato[i])

                }
                
            }
            break;

        case 5:
            console.log("===SALDO FINAL===")
           console.log("Quantidade de deposito", +qtd_depositos)
            console.log("valor de saque", +qtd_saques)
            console.log("valor total depositado",total_depositos)
            console.log("valor total sacado",total_sacado )
    
    break;
 }
}


