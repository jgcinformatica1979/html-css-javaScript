//  boolean e conditoin
// bolean pode ser verdadeiro ou falso, true or false 0 or 1
// usado paracondicionais de verdadeiro ou falso
// retorna false o proprio false, 0, NaN, null, undefined e string vazia
// operador logico de negacao ! inverte o estado da booleans

// dois !! e possivel ver o estado da booleana
// para ver se é extritamente igual ===
// usa ! na frente de == para ver se é diferente
// o operador && compara se uma expressao e a outra é verdadeira e retorna o ultimo  verdadeiro
// operador ou || dois pipe esta em busca do verdadeiro, retorna o primeiro valor true que encontrar 

//Use a combinação Alt + 124 para criar um pipe; Use a combinação Alt + 92 para criar uma conta barra.

// 25 minutos





var possuiGraduacao = false
var posuiDoutorado = false

if(possuiGraduacao){
    console.log ('possui graduacao');

}else{
    console.log('nao possui graduacao');
}


if (posuiDoutorado) {
    console.log('possui graduacao e doutorado');
} 
else if(possuiGraduacao){
    console.log('possui graduacao, ma nao possui doutorado');
}
else {
    console.log('nao possui graduacao');
}

var nome = 5+4
if (nome){
    console.log(nome);

}else {
    console.log('nome nao existem');
}

if (!nome){
    console.log('nao inverteu ');
}else{
    console.log('veja que inverteu');
}
if ((5-5) && (5+5)){
    console.log('verdadeiro');
}else{
    console.log('falso')
}
if ((5-10) && (5+5)){
    console.log('verdadeiro');
}else{
    console.log('falso')
}

var condicional = (5-5) || (5+5) || (10-2)
console.log(condicional)
condicional = (5-5) || (5+5) && (10-2)
console.log(condicional)  // retorna o ultimo verdadeiro