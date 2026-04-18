const prompt = require('prompt-sync')();
let saldo_inicial= 100
let extrato= []
let menu= 0

//// 
let qtd_saques= 0
let qtd_depositos= 0
let total_depositos= 0
let total_sacado= 0

while (menu !== 5){
   console.log("1- consultar saldo");
   console.log("2- depositar");
   console.log("3- sacar");
   console.log("4- ver extrato");
   console.log("5- sair");
   menu = Number(prompt("Escolha:"));
switch (menu) {
    case 1:
        console.log("saldo de"+saldo_inicial)
        
        break;

    case 2: 
    qtd_depositos = Number (prompt("digite o valor deposito"))
    if(qtd_depositos > 0){

        valorfinal= saldo_inicial+qtd_depositos
        console.log("",valorfinal)
    }
    else{
        console.log("erro")
        break;
    }
    case 3:
        qtd_saques= Number(prompt("digite o valor do saque"))
        if(qtd_depositos > 0)
            
        
}
}