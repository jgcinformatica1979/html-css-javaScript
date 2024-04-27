// window.alert('oi')

// windows é o objeto global do browser e possui fiferentes metodos e propriedades

// propriedade retorna um valor 
//e metodo ou funcao precisa ser execultada com () e argumentos

const href = window.location.href
console.log(href)

const h1Selecionado = document.querySelector('h1')

// const h1classes = h1Selecionado.length
// console.log(h1classes)
function callback1(){
    console.log('clicou', h1Selecionado.innerText)
}



// h1Selecionado.addEventListener('click', callback1)


// execicio


// retrorne a url da pagina

const hrfPagina = window.location.href
console.log(hrfPagina)

// selecionar o primeiro elemento da pagina que contem a classe ativa

const elementoAtivo = document.querySelectorAll('.ativa')
console.log(elementoAtivo)


// retorne a linguagem do navegador

const liguagem = window.navigator.languages

console.log(liguagem)

// retorne a largura da janela

const largura = window.innerWidth
console.log(largura)



