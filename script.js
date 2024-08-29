const caixaPrincipal = document.querySelector(".caixa- principal");
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    
    const caixaResultado = document.querySelector(".caixa-resultado");
    
    const textoResultado = document.querySelector(",texto-resultado");
    
    const perguntas = [
    {
    enunciado: "Ensira o anunciado da Pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
    { enunciado: "Assim que saiu da escola, você se
     depara com uma nova tecnologia: um chat que consegue
     responder a todas as dúvidas que uma pessoa pode ter.
     Além disso, o chat também gera imagens e áudios
     hiper-realistas. Qual o seu primeiro pensamento?,",

       alternativas: [“Isso é assustador!",“Isso é maravilhoso!” ], 
       { texto: “Isso é assustador!”, afirmacao: “afirmação”
        afirmacao: “afirmação”
     },
       { texto: “Isso é maravilhoso!”, afirmacao: “afirmação”
        afirmacao: “afirmação”
     }
      let atual = 0;
      let perguntaAtual;
      function mostraPergunta() 
      if (atual >= perguntas.length) {
        mostraResultado();
        caixaPerguntas.textContent = “Em 2049...”;
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = “”;
        return;
      }
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent =perguntaAtual.enunciado;{
      caixaAlternativas.textContent = “ “;
      mostraAlternativas();
    }
      const alternativa
      function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
      }const botaoAlternativas =document.createElement(“button”);
     botaoAlternativas.textContent = alternativa.texto;
     botaoAlternativas.addEventListener(“click”, () =>
      respostaSelecionada());
        mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);}}
    function mostraAlternativas() {
    mostraPergunta();
    },
    ];
    function respostaSelecionada(opcaoSelecionada) {
      const afirmacoes = opcaoSelecionada.afirmação;
     historiaFinal = afirmacoes;
     atual++;
     mostraPergunta();
     }
      atual++;
      mostraPergunta();
      }
      let atual = 0;
      let perguntaAtual;
      let historiaFinal = “”;