const prompt = require('prompt-sync')();
let menu = ""
let nomes = []
while (menu !== 3 ){
   console.log ("----menu cadastro----")
   console.log ("1- cadastar")
   console.log("2- listar")
   console.log ("3 - sair")

  menu = Number (prompt ("Escolha numero acima:"))

 if(menu ==1){
    let nome = prompt("Digite um nome:")
    nomes.push(nome)
 } else if (menu == "2"){
    console.log (nomes)
 } else if(menu == "3")
    console.log ("saiu")
else{
    console.log ("erro")
}
}
console.log("deslogando...")
