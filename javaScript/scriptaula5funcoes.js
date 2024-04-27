//funcoes

// bloco de codigo que poderao ser reutilizados, as funcoes tem () apos ela para receber paramentos, existem funcoes nativas e as funcoes proprias 

function areaQuadrado(lado) {
    return lado * lado;
    
}
console.log(areaQuadrado(4))
// veja que console.log é uma funcao nativa e areaQuadrado é uma funcao propria que eu memo criei
function pi(){
    return 3.14
}

var total = 5 * pi();
console.log(total)

// ao criar uma funcao voce define os paramentros ao execultar uma funcao voce passa os argumentos

function imc(peso, altura) { // peso e altura sao paramentos
    const imc = peso / (altura **2);
    return imc;
}
console.log(imc(89, 1.75)) // imc é argumento da funcao console.log e 89 e 1.75 sao argumentos da funcao imc

function corFarvorita(cor){
    if(cor === 'azul'){
        return 'eu goto do ceu';       
    }else if(cor === 'verde'){
        return 'eu gosto de mato'

    }else{
        return 'eu nao gosto de cores'
    }
}

console.log(corFarvorita('verde'));
console.log(corFarvorita('azul'));

// funcao anomima abaixo

addEventListener('click', function(){
    console.log('clicou');
})

// uma funcao pode retorna qualquer tipo de dado ate mesmo outra funcao

function terceiraIdade(idade){
    if (typeof idade !== 'number'){
        return 'informe sua idade';
    }else if (idade >= 60){
        return true;
    }else{
        return false;
    }
}
console.log(terceiraIdade(45))
console.log(terceiraIdade(72))
console.log(terceiraIdade('jioo'))


function paisesFaltaVisitar (paiseVisistados){
    var totalPaises = 193;
return ` falta visitar ${totalPaises - paiseVisistados} paises`;
}
console.log (paisesFaltaVisitar(5));

// uma funcao pode retornar outra funcao
var profissao = 'designer'
function dados(){
    var nome = 'joao'
    var idade = 44
    function outrosDados(){
        var endereco = 'Campinas'
        var idade = 44
    return  `${nome}, ${idade}, ${endereco},${profissao}`
    }
return outrosDados();
}
console.log(dados())