let pratoEscolhido ="";

let bebidaEscolhida ="";

let sobreEscolhida ="";

let pedPrato ="";

let pedBebida ="";

let pedSobre ="";

let ped = "";

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

    ped = document.querySelector(".pedido");

    const menu = document.querySelector(".menu");

    const fecharPedido = document.querySelector(".fecharPedido");

    if( ped ){

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

    if(cancelar){

        pedido.classList.add("esconder");

    }

}

function confirmarPedido(){

    if( pratoEscolhido !== ""){

        if( bebidaEscolhida !== ""){

            if(sobreEscolhida !== ""){

                let prato = document.querySelector(".comida .escolhido");

                let bebida = document.querySelector(".bebida .escolhido");

                let sobremesa = document.querySelector(".sobremesa .escolhido");
        
                pedPrato = prato.querySelector("h1").innerText;

                pedBebida = bebida.querySelector("h1").innerText;

                pedSobre = sobremesa.querySelector("h1").innerText;

            }

        }

    }

    chamaFuncao();
    
}

function chamaFuncao(){

    selecionaFecharPedido();

    confirmarPedido();
}