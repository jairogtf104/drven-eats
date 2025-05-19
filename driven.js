let pratoEscolhido ="";

let bebidaEscolhida ="";

let sobreEscolhida ="";

let pedPrato ="";

let pedBebida ="";

let pedSobre ="";

let ped = "";

const menu = "";

const fecharPedido = "";

function selecionaprato(button){

    pratoEscolhido = button.innerHTML;

    pratoEscolhido = button.classList.add("escolhido");

    pedPrato = pratoEscolhido.document.querySelector('h1').innertext;

    const parent = button.parentElement;

    const botoes = parent.querySelectorAll("button, div");
  
    botoes.forEach(item => item.classList.remove("escolhido"));

    button.classList.add("escolhido");

    pedido();

}

function selecionabebida(button){

    bebidaEscolhida = button.innerHTML;

    bebidaEscolhida = button.classList.add("escolhido");

    pedBebida = bebidaEscolhida.document.querySelector('h1').innertext;

    const parent = button.parentElement;

    const botoes = parent.querySelectorAll("button, div");
  
    botoes.forEach(item => item.classList.remove("escolhido"));

    button.classList.add("escolhido");

    pedido();
    
}

function selecionasobremesa(button){

    sobreEscolhida = button.innerHTML;

    sobreEscolhida = button.classList.add("escolhido");

    pedSobre = sobreEscolhida.document.querySelector('h1').innertext;

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

    ped = document.querySelector(".pedido");

    menu = document.querySelector(".menu");

    fecharPedido = document.querySelector(".fecharPedido");

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

function confirmarPedido(){

   /* let pedidoPronto1 = document.querySelector(".pedido");

    let pedidoPronto2 = document.querySelector(".pedido");

    let pedidoPronto3 = document.querySelector(".pedido");*/

    if( pratoEscolhido !== ""){

        if(bebidaEscolhida !== ""){

            if(sobreEscolhida !== ""){

                pedidoPronto1 = selecionaprato();

                pedidoPronto1 = selecionabebida();

                pedidoPronto1 = selecionasobremesa();
            }

        }
        
    }
    
}

function chamaFuncao(){

    selecionaFecharPedido();

    confirmarPedido();
}