const prompt = require('prompt-sync')();
let menu = -1
let Pedidos = []
let produto = ""
let itens = 0
let prioridade = ""
let codigo = ""
let setor = ""
let prazo= 0
let quantidade = 0
let media = 0
let alta = 0
let baixa = 0 
let urgencia = 0
let buscarcodigo= ""
while (menu !== 5 ){
   console.log ("\n----menu cadastro----")
   console.log ("1- cadastar")
   console.log("2- listar")
   console.log ("3- Resumo")
   console.log ("4- Buscar")
   console.log ("5 - sair")

  menu = Number(prompt ("Escolha numero acima:"))

 if(menu === 1){
   codigo = prompt ("codigo")
   produto = prompt ("digite produto")
   setor = prompt ("digite setor")
   quantidade = Number(prompt("digite a quantidade"))
   prazo= Number (prompt("digite o prazo"))

   if(prazo <= 2){
      prioridade = "URGENTE"
   }
   else if (prazo <= 5){
      prioridade= "ALTA"
   }
   else if (prazo <= 6){
      prioridade = "Média"
   }
   else if (prazo >10){
      prioridade = "baixa"
   }

   Pedidos.push({
      codigo, 
      produto,
      setor,
      quantidade,
      prazo,
      prioridade
   })
   console.log("pedido efetuado")

 }
 else if(menu === 2){
   if(Pedidos.length === 0){
      console.log("nenhum pedido")
   }
   else{
      for(let i = 0; i< Pedidos.length; i++){
         let pedido = Pedidos [i]
         console.log (pedido.codigo, "|" , pedido.produto, "|", pedido.setor, "|", pedido.quantidade, "|", pedido.prazo, "dias |", pedido.prioridade)
                     
      }
   }
 }
 else if(menu === 3){
   let totalPedidos = Pedidos.length
   itens= 0
   urgencia = 0
   media = 0
   alta = 0
   baixa = 0
   for(let i = 0; i< Pedidos.length; i++){
      itens+= Pedidos[i].quantidade
      if(Pedidos [i].prioridade === "urgentes") urgencia++
      else if(Pedidos [i].prioridade === "media") media++
       else if(Pedidos [i].prioridade === "Alta") alta++
              else if(Pedidos [i].prioridade === "Baixa") baixa++

 }
   console.log("Resumo")
   console.log ("pedidos", Pedidos)
   console.log ("itens", itens)
   console.log("urgencias", urgencia)
   console.log("media", media)
   console.log("altas", alta)
   console.log("baixas", baixa)}

 else if(menu === 4){
   buscarcodigo = prompt ("digiatar codigo produto")
   encontrado = false
   for(let i = 0; i< Pedidos.length; i++){
      if(Pedidos[i].codigo === buscarcodigo){
         let pedido = Pedidos[i]
         console.log (pedido.codigo, "|" , pedido.produto, "|", pedido.setor, "|", pedido.quantidade, "|", pedido.prazo, "dias |", pedido.prioridade)
      encontrado = true             
   
      }
   }
      if(!encontrado){
         console.log ("pedido não encontrado no sistema")
      }
 
 }
 else if(menu === 0){
   console.log("sistema encerrado")
 }
 else{
   console.log ("erro")
 }






}
