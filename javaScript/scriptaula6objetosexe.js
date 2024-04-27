// crie um obejto com seu dados pessoais

var dados = {
    nome: 'joao',
    sobrenome: 'gomes',
    idade: 44,
    cidade: 'Campinas'

}

// crie um metodo no obejto anterrior que mostre seu nome completo
dados.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`

}
console.log(dados.nomeCompleto
())

// modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    porta: 4,
    marca: 'audi',
}

carro.preco = 3000

// crie um objeto de um cachorro que repreenta um labrador
// preto com 10 anos e que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade : 10,
    latir(genero){
        if (genero === 'h'){
        return 'latir' ;
        } else {
        return 'Quieto';
    
        }
    }
}

console.log(cachorro.latir())
console.log(cachorro.latir('h'))


