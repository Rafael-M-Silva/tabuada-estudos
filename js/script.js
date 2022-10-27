
const button = document.querySelector("#botao")
button.addEventListener("click", () =>{
    let valorTabuada = document.querySelector("#tabuada")
    let valorTabuadaConvertido = Number(valorTabuada.value)
    let resposta = document.querySelector("#res")

    if(valorTabuadaConvertido == 0 | valorTabuada.value == 0){
        window.alert("[ERROR] Digite um valor!")
        resposta.innerHTML = 'Valor invalido!'
    }else{
        resposta.innerHTML = `<h2>Tabuada do ${valorTabuadaConvertido}</h2> <hr>`
        for(i = 1; i <= 10; i++){
            resposta.innerHTML += `<p>${i} x ${valorTabuadaConvertido} = ${i*valorTabuadaConvertido}</p>`
        }
    }
})