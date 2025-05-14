let pratoEscolhido ="";

let bebidaEscolhida ="";

let sobreEscolhida ="";

function selecionaprato(button){

    pratoEscolhido = button.innerHTML;

    const parent = button.parentElement;

    const botoes = parent.querySelectorAll("button, div");
  
    botoes.forEach(item => item.classList.remove("escolhido"));

    button.classList.add("escolhido");

    pedido();

}

function selecionabebida(button){

    bebidaEscolhida = button.innerHTML;

    const parent = button.parentElement;

    const botoes = parent.querySelectorAll("button, div");
  
    botoes.forEach(item => item.classList.remove("escolhido"));

    button.classList.add("escolhido");

    pedido();

    
}

function selecionasobremesa(button){

    sobreEscolhida = button.innerHTML;

    const parent = button.parentElement;

    const botoes = parent.querySelectorAll("button, div");
  
    botoes.forEach(item => item.classList.remove("escolhido"));

    button.classList.add("escolhido");
    
    pedido();

}

function pedido(){

    if( pratoEscolhido !== ""){

        if(bebidaEscolhida !== ""){

            if(sobreEscolhida !== ""){
                
               const menu = document.querySelector(".menu");

               const fecharPedido = document.querySelector(".fecharPedido");

                menu.classList.add("esconder");
                
                fecharPedido.classList.remove("esconder");

            }

        }
        
    }

}
function escolhido(){

    let ped = document.querySelector(".pedido");

    const menu = document.querySelector(".menu");

    const fecharPedido = document.querySelector(".fecharPedido");

    if( ped !== ""){

        ped.classList.remove("esconder");
        
        fecharPedido.classList.add("esconder");

    }

}

function selecionaFecharPedido(){

    escolhido();

    pedido();
}

function cancelaPedido(){

    let cancelar = document.querySelector(".cancelar");

    const pedido = document.querySelector(".pedido");

    if(cancelar !== ""){

        pedido.classList.add("esconder");

    }

}

function confirmarPedido(button){

    pratoEscolhido = button.classList.add("escolhido");

    bebidaEscolhida = button.classList.add("escolhido");

    sobreEscolhida = button.classList.add("escolhido");

    pedPrato = document.querySelector('h1');

    pedBebida = document.querySelector('h1');

    pedSobre = document.querySelector('h1');

    if( pratoEscolhido !== ""){

        if(bebidaEscolhida !== ""){

            if(sobreEscolhida !== ""){

                pratoEscolhido = document.querySelector('h1');

                bebidaEscolhida = document.querySelector('h1');

                sobreEscolhida = document.querySelector('h1');

            }

        }
        
    }
    
}

function chamaFuncao(){

    selecionaFecharPedido();

    confirmarPedido();
}