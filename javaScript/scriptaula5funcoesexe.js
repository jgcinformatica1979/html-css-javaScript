// crie uma funcao para verificar se um valor é true ou false

function terceiraIdade(idade){
    if (idade >= 60){
        return true
    } else{
        return false
    }
}
console.log(terceiraIdade(65));

function isTruty(dados){
    return !! dados;
}

// crie uma funcao que retorne o perimetro de um quadrado

function calculoPerimento(lado1, lado2, lado3, lado4){
    perimetro = lado1 + lado2 + lado3 + lado4
    return perimetro
}

console.log(calculoPerimento(5, 6, 8 ,4))
// crie uma funcao que retorne seu nome e sobrenome

function nomeCompleto(nome, sobrenome){
    return ` meu nome completo é ${nome}' ' ${sobrenome}`
}
console.log(nomeCompleto('joao', 'gomes coelho'))


//crie uma funcao para verificar se um numero é par

function verificarPar(valor){
if (valor % 2 !== 0){
    return `o valor ${valor} é impar`
}else{
    return `o valor ${valor} é par`
}
}
console.log(verificarPar(91));

// crie uma funcao que retorne o tipo de dado 

function tipoDado(dado){
    return typeof dado;
}
addEventListener('click', function () {console.log ('joao gomes coelho' )});

