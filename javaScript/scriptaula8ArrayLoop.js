// array 

// é um grupo de valores geralmente relacionado, serve para guadar diferente valores em uma unica variavel

// a sitaxe é igual dicionario no python

var videoGames = ['switch', 'Ps4', 'Xbox', '3ds']

// videoGames[0] // switch
//videoGames[2] // Xbox

//console.log(videoGames.pop()) //remove o ultimo inten 
//console.log(videoGames.length)
 //console.log(videoGames.push('3ds'))


// for loop

// fazer algo repetidamente ate uma condicao eja atendida

for (var numero = 1 ; numero < 5 ; numero ++){
    console.log(numero)
}

// while loop

var i = 0
while (i <= 10){
    console.log(i)
    i++
}

for (var item = 0 ; item < 4; item++){
    console.log(videoGames[item])
}

// palabra resevada break

for (var item = 0; item < videoGames.length; item++){ if (videoGames[item] === 'Ps4'){
    break
}
console.log(videoGames[item])

}

// forEach
// E um metodo que execulta uma funcao para cada intem do alrray , é uma forma mais simples de ultilizamos um loop com alrray

var videoGames = ['switch', 'Ps4', 'Xbox', '3ds']
videoGames.forEach(function(){
    console.log(i)
}
)

var frutas = ['banana', 'pera', 'laranja', 'maca', 'abacaxi', 'uva' ]
frutas.forEach(function(variavel, index){
    console.log(variavel, index)
}
)














