// crie uma alrray com os anos que o brasil foi apeao da copa


var BasilCampeao = [1959, 1962,  1970, 1994, 2002]

// interaja com o alrray ultilizando loo, para mostrar no console a seguinte mensagem o brasil ganhou a copa de ${ano}
BasilCampeao.forEach(function(i) {
    console.log(`O Brasil ganhou a copa de ${i}`)
    
});

for (var i = 0 ; i < BasilCampeao.length; i++){
    console.log(`O brasil ganhou a copa do ano de ${i}`)
}

// interaja com loop abaixo  e pare ao chegar em pera

var  frutas = ['Banana', 'Maca', 'Pera', 'Uva', 'Melacia']

//frutas.forEach(function(i){
   // console.log(i)
    //if (i === 'Pera'){
      //  console.log (i)
        
    //}
//})

for(var fruta = 0; fruta < frutas.length; fruta ++){
    console.log(frutas[fruta])
    if(frutas[fruta] ==='Pera'){
        break
    }
}
// coloque a ultima fruta da alrray acimaem uma varriavel, sem remover a mema da alrray
var ultimaFruta = frutas[frutas.length -1]
console.log(ultimaFruta)









