// Objetos

// é um conjunto de variaveis e funcoes que sao chamadas de propriedades e metodos e serve para organizar o codigo em pequenas partes reutilizaveis

//

var pessoa = {
    nome: 'joao',
    idade: 44,
    profissao: 'Designer',
    possuiFacudade: true,
}

console.log(pessoa.nome)

// Metodos

// é uma propriedade do objeto que possui uma funcao no local do seu valor

var quadrado = {
    lados: 4,

    area: function(lado){
    return lado * lado;
},
    perimentro: function(lado){
        return this.lados * lado; 
    },   
// this  palavra reservada do java script siguinifica esse ou seja referencia ao proprio objeto , no caso o obejeto quadrado
}
// exitem objetos nativo e objetos proprio criado pelo dev
Math.PI; // pi é uma proriedade do objeto math
Math.random() // random é um metodo com funcao do objeto math
console.log(quadrado.area(5))
console.log(quadrado.perimentro(5))
console.table(quadrado)
console.table(Math)


