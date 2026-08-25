/*====BOTOES [SOBRE MIM] E [FORMAÇAO]======= */

const botoes = document.querySelectorAll(".menu-botao");/*Procura todos os elementos que possuem a classe menu botões(Sobre mim e Formação)*/

botoes.forEach(function(botao){/*Para cada botao encontrado, faça o seguinte
    */
    
    botao.addEventListener("click", function(){/* Quando esse botao receber um clique ou toque, executa a seguite funçao..("click" é um tipo de evento)
     */
        const submenuAtual = botao.nextElementSibling;/*o javascript pega o elemento que voce acabou de tocar*/

        document.querySelectorAll(".submenu").forEach(function(submenu){/*pega todos os submenu*/


            if(submenu !== submenuAtual){/*eesse submenu é diferente daquele que o usuario acabou de cliclar?*/

                submenu.classList.remove("aberto");
            }
        });

        submenuAtual.classList.toggle("aberto");/*toggle funciona como um interruptor*/
    });
});

/*======VALIDA FORMULARIO========*/

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();
    const resultado = document.querySelector("#resultado");

    if (nome === "" || email === "" || mensagem === "") {
        resultado.textContent = "Preencha todos os campos.";
        return;
    }

    resultado.textContent = "Mensagem enviada com sucesso!";

    formulario.reset();

});


