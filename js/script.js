async function sortear(){
    //Pegar os total do resultado
    let totalResultado =Number(document.querySelector('.totalresult').value)

   

    //Pegar o menor valor
    let menorValor =Number(document.querySelector('.menorvalor').value);
    //Pegar o maior valor
    let maiorValor = Number(document.querySelector('.maiorvalor').value);


    for(let j = 0; j < 20; j++){

   
         //Limpar resultados antigos no HTML existente
         const boxResult = document.querySelector('.box_output');
         boxResult.innerHTML = ''

    for(let i = 0; i < totalResultado; i++){
    //Gerar um nnumero aleatorio entre o maior valor e o menor valor
    const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor 

    //Gerar um elemento HTML
    const resultElement = document.createElement('div')
    resultElement.classList.add('output')
    resultElement.innerText = resultado

    //Adicionar o elemento criado dentro do HTML Existente
    boxResult.append(resultElement)
  }
  await wit(20)
}

}

function wit(tempo){
    return new Promise((resolve) =>(
        setTimeout(() => resolve(), tempo)
    ))
}