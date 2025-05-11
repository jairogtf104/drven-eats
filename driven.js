let pratoEscolhido ="";

let bebidaEscolhida ="";

let sobreEscolhida ="";

const preco1 = 14.99875 ;

const preco2 = 17.48975 ;

const preco3 = 20.89850 ;

const coca = 4.99875 ;

const fanta = 4.48975 ;

const suco = 5.99850 ;

const pudim = 2.99875 ;

const brownie = 3.48975 ;

const mouse = 4.89850 ;

const casas = 2;

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

    pratoEscolhido = button.innerHTML;

    bebidaEscolhida = button.innerHTML;

    sobreEscolhida = button.innerHTML;

    if( pratoEscolhido !== ""){

        if(bebidaEscolhida !== ""){

            if(sobreEscolhida !== ""){
                
                const  pedPrato = 'prato ${pratoEscolhido} escolhido ';

                const  pedBebida = 'prato ${bebidaEscolhido} escolhido ';

                const  pedSobre = 'prato ${sobreEscolhido} escolhido ';

                document.querySelector(".fecharPedido").innerHTML = pedPrato;

                document.querySelector(".fecharPedido").innerHTML = pedBebida;

                document.querySelector(".fecharPedido").innerHTML = pedSobre;
            }

        }
        
    }
    
}

function chamaFuncao(){

    selecionaFecharPedido();

    confirmarPedido();
}