 function criarParagrafo(){
            let para = document.createElement("p");
            para.textContent = "Você clicou no botão!"; // Define o texto do parágrafo
            document.body.appendChild(para); // Adiciona o parágrafo ao corpo do documento

            const botoes = document.querySelectorAll("button");// Seleciona todos os botões na página
            
            for( var i = 0; i < botoes.length; i++ ){
                botoes[i].addEventListener("click", criarParagrafo);
            } // Adiciona um ouvinte de evento de clique a cada botão
        }