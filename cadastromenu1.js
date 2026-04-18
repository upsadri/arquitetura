const prompt = require('prompt-sync')();

let menu = -1;
let Pedidos = [];

let produto = "";
let itens = 0;
let prioridade = "";
let codigo = "";
let setor = "";
let prazo = 0;
let quantidade = 0;

let media = 0;
let alta = 0;
let baixa = 0;
let urgencia = 0;

let buscarcodigo = "";

while (menu !== 5) {
   console.log("\n----menu cadastro----");
   console.log("1- cadastrar");
   console.log("2- listar");
   console.log("3- resumo");
   console.log("4- buscar");
   console.log("5- sair");

   menu = Number(prompt("Escolha numero acima: "));

   if (menu === 1) {
      codigo = prompt("codigo: ");
      produto = prompt("digite produto: ");
      setor = prompt("digite setor: ");
      quantidade = Number(prompt("digite a quantidade: "));
      prazo = Number(prompt("digite o prazo: "));

      if (prazo <= 2) {
         prioridade = "URGENTE";
      } else if (prazo <= 5) {
         prioridade = "ALTA";
      } else if (prazo <= 10) {
         prioridade = "MEDIA";
      } else {
         prioridade = "BAIXA";
      }

      Pedidos.push({
         codigo,
         produto,
         setor,
         quantidade,
         prazo,
         prioridade
      });

      console.log("pedido efetuado");

   } else if (menu === 2) {
      if (Pedidos.length === 0) {
         console.log("nenhum pedido");
      } else {
         for (let i = 0; i < Pedidos.length; i++) {
            let pedido = Pedidos[i];
            console.log(
               pedido.codigo, "|",
               pedido.produto, "|",
               pedido.setor, "|",
               pedido.quantidade, "|",
               pedido.prazo, "dias |",
               pedido.prioridade
            );
         }
      }

   } else if (menu === 3) {
      let totalPedidos = Pedidos.length;

      itens = 0;
      urgencia = 0;
      media = 0;
      alta = 0;
      baixa = 0;

      for (let i = 0; i < Pedidos.length; i++) {
         itens += Pedidos[i].quantidade;

         if (Pedidos[i].prioridade === "URGENTE") urgencia++;
         else if (Pedidos[i].prioridade === "MEDIA") media++;
         else if (Pedidos[i].prioridade === "ALTA") alta++;
         else if (Pedidos[i].prioridade === "BAIXA") baixa++;
      }

      console.log("\n--- RESUMO ---");
      console.log("Pedidos:", totalPedidos);
      console.log("Total de itens:", itens);
      console.log("Urgentes:", urgencia);
      console.log("Média:", media);
      console.log("Altas:", alta);
      console.log("Baixas:", baixa);

   } else if (menu === 4) {
      buscarcodigo = prompt("digitar codigo do produto: ");
      let encontrado = false;

      for (let i = 0; i < Pedidos.length; i++) {
         if (Pedidos[i].codigo === buscarcodigo) {
            let pedido = Pedidos[i];

            console.log(
               pedido.codigo, "|",
               pedido.produto, "|",
               pedido.setor, "|",
               pedido.quantidade, "|",
               pedido.prazo, "dias |",
               pedido.prioridade
            );

            encontrado = true;
         }
      }

      if (!encontrado) {
         console.log("pedido não encontrado no sistema");
      }

   } else if (menu === 5) {
      console.log("sistema encerrado");

   } else {
      console.log("erro");
   }
}