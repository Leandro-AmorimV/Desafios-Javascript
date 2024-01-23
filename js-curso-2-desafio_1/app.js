//1.Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio!";

//2.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarConsole() {
    console.log('O botão console foi clickado.');
}

//3.Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function verificarAlert() {
    alert('Eu amo JS!');
}

//4.Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function verificarPrompt() {
    let cidade = prompt('Escreva uma cidade do Brasil.');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

//5.Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function verificarSoma() {
   let num1 = parseInt(prompt('Digite um número.'));
   let num2 = parseInt(prompt('Digite outro número.'));
   let resultado = num1 + num2;

   alert(`A soma de ${num1} com ${num2} tem o resultado de ${resultado}`);
}