let pratoEscolhido = "";

let bebidaEscolhida = "";

let sobreEscolhida = "";

function selecionaprato(button){

    pratoEscolhido = button.innerHTML;

    const parent = button.parentElement;

    const botoes = parent.querySelectorAll("button, div");
  
    botoes.forEach(item => item.classList.remove("escolhido"));

    button.classList.add("escolhido");

}

function selecionabebida(button){

    bebidaEscolhida = button.innerHTML;

    const parent = button.parentElement;

    const botoes = parent.querySelectorAll("button, div");
  
    botoes.forEach(item => item.classList.remove("escolhido"));

    button.classList.add("escolhido");
    
}

function selecionasobremesa(button){

    sobreEscolhida = button.innerHTML;

    const parent = button.parentElement;

    const botoes = parent.querySelectorAll("button, div");
  
    botoes.forEach(item => item.classList.remove("escolhido"));

    button.classList.add("escolhido");
    
}

function intensSelecionados(){

    if( pratoEscolhido !== ""){

        if(bebidaEscolhida !== ""){

            if(sobreEscolhida !== ""){

               document.querySelector("menu").classList.add(".fechar-pedido");
               const texto = "fechar pedido";

            }

        }
        
    }

}