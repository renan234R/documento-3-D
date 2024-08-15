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
      let atual = 0;
      let perguntaAtual;
      function mostraPergunta() 
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent =perguntaAtual.enunciado;{
      mostraAlternativas();
      const alternativa
      function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
      }const botaoAlternativas =document.createElement(“button”);
     botaoAlternativas.textContent = alternativa.texto;
     botaoAlternativas.addEventListener(“click”, function () {
        atual++;
        mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);}}
    function mostraAlternativas() {
    mostraPergunta();
    },
    ];