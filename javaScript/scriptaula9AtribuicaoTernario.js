var numero = 10
var numero1 = 10
var numero2 = 10
var numero3 = 10
var numero4 = 10
var numero5 = 10
numero += 5
console.log(numero)
numero1 -= 5
console.log(numero1)
numero2 /= 5
console.log(numero2)
numero3 *= 5
console.log(numero3)
numero4 %= 5
console.log(numero4)
numero5 **= 5
console.log(numero5)

// operador ternario é uma abreviacao de condicionais com if e else

/* ternario porque tem 3 coisa acontecendo nele 

Condicao ? true : false 

var idade = 19
var podeBeber = (idade >= 18)? 'Pode Beber' : ' Nao pode Beber'

console.log(podeBeber) */

var idade = 15
var naoPossuiDiabete = false
var podeBeber = (idade >= 18)? 'Pode Beber' : ' Nao pode Beber'

console.log(podeBeber)

var idade = 19
var podeBeber = (idade >= 18 && naoPossuiDiabete)? 'Pode Beber' : ' Nao pode Beber'

console.log(podeBeber)

/* Execicio

1 - Some 500 ao valor de scroll abaixo

2 - Atribua true para a variavel darCredito , caso o cliente possuir carro e casa e false caso o contrario
*/
var scroll = 1000
scroll += 500
console.log(scroll)


var possuiCarro = false
var possuiCasa = true
var darCredito = (possuiCarro === true && possuiCasa === true)? 'Credito aprovado' : 'Credito Reprovado'

console.log(darCredito)







