//'use strict' //quebra a varriavel global fruta abaixo
/*
Escopo de funcoes 
Variaveis declada dentro de funcao nao ao acessadas fora da mesma.
*/
function mostrarCarro(){
    var carro = 'fusca'
    console.log(carro)
}

mostrarCarro()
//console.log(carro) // da erro poque a variavel carro é local a funcao motrar carro

// escopo tem o objetivo de evitar conflito de nomes

/* Declarar uma variavel em usar as palavra chave var, let ou const, cria uma varriavel ue pode ser acessada de qualquer escopo(global) , isso é errado */

function mostrarFruta(){
    fruta = 'laranja'
    console.log(fruta)

}
mostrarFruta()
console.log(fruta)


// escopo de bloco 

/* varriaveis criadas com var , vazam o bloco , por isso a melhor forma de declarar variavel é ultilizando const e let, pois ela respeita o escopo de bloco */

/*bloco na funcao é os codigo colocado entre as chaves */

{
    var mes = 'dezembro'
    console.log(mes)

}

console.log(mes) // varriavel mes acesada fora do escopo

{
    let mes1 = 'janeiro'
    console.log(mes1)
}

// console.log(mes1) //erro pois mes1 esta fora do escopo 

/*Diferenca entre let e const
        const 
    mantem o ecopo no bloco, impede a redeclaracao e impede a modificacao do valor da varriavel

    ela nao impede modificacao quando declaradda como objeto nos indice e valores

*/
const mes2 = 'Fevereiro'
//mes2 = 'marco' // erro const nao aceita modificacao
// const semana // erro nao aceita ser declarada sem valor

const data = {
    dia: 28,
    mes3: 'Marco',
    ano: 2024

}

data.dia = 29 // foi modificado o dia para 29
data.horas = '17:30' // foi acressentado a hora 

console.log(data)

//data = 'janeiro' // erro tentado mudar o objeto em string


/*                  let

Mantem o escopo no bloco, impede a redeclarao mas permite a modificao do valor da varriavel e permite ser declarada sem valor

*/                
let ano
ano = 2024
ano++
console.log(ano)


// let ano = 2025 // erro tentou redeclara a varriavel


