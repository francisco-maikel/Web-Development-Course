const dayNow = new Date().getDay(); // 0-6

switch (dayNow) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
    break;
}

const option = prompt(`
   Digite a opção desejada:
   1-Consultoria
   2-Atendimento
   3-Encerrar
`);

switch (option) {
  case "1":
    alert("Consultoria em telemarketing");
    break;
  case "2":
    alert("Aguarde nossos atendentes...");
    break;
  case "3":
    alert("Volte sempre!");
    break;
  default:
    alert("Opção invalida");
    break;
}