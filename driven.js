let pratoEscolhido ="";

let bebidaEscolhida ="";

let sobreEscolhida ="";

let pedPrato ="";

let pedBebida ="";

let pedSobre ="";

let pratoPreco ="";

let bebidaPreco ="";

let sobremesaPreco ="";

let ped = "";

let fecharPedido = "";

let fechaPedido = "";

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

                fecharPedido = document.querySelector(".fecharPedido");

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

    fechaPedido = document.querySelector(".fecharPedido");

    if( fecharPedido !== ""){

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

    let pra = document.getElementById("prato");

    let beb = document.getElementById("bebida");

    let sob = document.getElementById("sobremesa");

    let preco1 = document.getElementById("1preco");

    let preco2 = document.getElementById("2preco");

    let preco3 = document.getElementById("3preco");

    if( pratoEscolhido !== ""){

        if( bebidaEscolhida !== ""){

            if(sobreEscolhida !== ""){

                let prato = document.querySelector(".comida .escolhido");

                let bebida = document.querySelector(".bebida .escolhido");

                let sobremesa = document.querySelector(".sobremesa .escolhido");
        
                pedPrato = prato.querySelector("h1").innerText;

                pedBebida = bebida.querySelector("h1").innerText;

                pedSobre = sobremesa.querySelector("h1").innerText;

                pratoPreco = prato.querySelector("h2").innerText;

                bebidaPreco = bebida.querySelector("h2").innerText;

                sobremesaPreco = sobremesa.querySelector("h2").innerText;

                preco1 = parseFloat(pratoPreco).toFixed(2);

                preco2 = parseFloat(bebidaPreco).toFixed(2);

                preco3 = parseFloat(sobremesaPreco).toFixed(2);

                let total = (parseFloat(pratoPreco) + parseFloat(bebidaPreco) + parseFloat(sobremesaPreco)).toFixed(2);

                let envioDoPedido = `Ola, gostaria de fazer o pedido:
                
                ${pedPrato}: ${preco1}

                ${pedBebida}: ${preco2}

                ${pedSobre}: ${preco3}

                Total: R$ ${total.replace(".", ",")}`;

                encodeURIComponent(envioDoPedido);

                window.open(`https://wa.me/${558487888273}?text=${envioDoPedido}`);

                

            }

        }

    }

}

function chamaFuncao(){

    selecionaFecharPedido();

    confirmarPedido();

}