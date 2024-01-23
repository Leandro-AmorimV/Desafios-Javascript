//1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function indiceDeMassaCorporal(alturaMetros, pesoKg){
    return pesoKg / (alturaMetros*alturaMetros);
}

console.log(indiceDeMassaCorporal(1,80, 75));

//2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculoFatorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    }

    let fatorial = 1;
    for (let a = 2; a <= numero; a++){
    fatorial *= a;
    }

    return fatorial;
}

let numero = calculoFatorial(4)
console.log(numero)

//3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function calculoDolar(valorDolar){
    let cotacaoDolar = 4.80;
    let valorReal = valorDolar * cotacaoDolar;
    return valorReal.toFixed(2);
}

let valorDolar = 40
valorReal = calculoDolar(valorDolar);
console.log(`$${valorDolar} são R$${valorReal} reais com a contação.`);

//4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculoRetangulo(altura, largura){
    let areaRetangulo = altura*largura;
    let perimetroRetangulo = 2 * (altura+largura);

    console.log(`A área da sala é de ${areaRetangulo} metros`);
    console.log(`O permetro da sala é de ${perimetroRetangulo}`)
}

calculoRetangulo(5, 9);

//5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculoCirculo(raio) {
    let pi = 3.14;
    let areaCirculo = pi*(raio*raio);
    let perimetroCiruclo = 2*pi*raio;

    console.log(`A área do círculo é de ${areaCirculo} metros.`);
    console.log(`O perímetro do círculo é de ${perimetroCiruclo} metros.`);
}

calculoCirculo(4);

//6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numeroUsado) {
    let multiplicador = 1;
    
    if(numeroUsado === 0 ){
        console.log('O número apenas multiplica por 0');
    } else {
        while(multiplicador < 11){
            let multiplicacao = numeroUsado * multiplicador;
            console.log(`${numeroUsado} x ${multiplicador} = ${multiplicacao}`);

            multiplicador++;
        }
    }

    
}

tabuada(3);