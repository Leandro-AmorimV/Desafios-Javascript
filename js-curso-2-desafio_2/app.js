//1.Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
    console.log('Olá, Mundo!')
}

olaMundo();

//2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome){
    console.log(`Olá, ${nome}`)
}

olaNome('Leandro');

//3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calculeONumero(numero){
   return numero * 2;
}
let numeroDobrado = calculeONumero(7);
console.log(numeroDobrado);

//4.Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaDosNumeros(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

let media = mediaDosNumeros(7, 7, 7);
console.log(media);

//5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(a, b) {
    return a > b? a : b;
}

let maior = numeroMaior(5, 4);
console.log(maior);

//6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function numeroMultiplicacao(numeroUsado){
    return numeroUsado * numeroUsado;
}

let resultadoMultiplicado = numeroMultiplicacao(3);
console.log(resultadoMultiplicado);