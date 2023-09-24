   // Função para exibir a mensagem de boas-vindas
   function exibirBoasVindas() {
    var chatMessages = document.getElementById('chat-messages');
    var boasVindasElement = document.createElement('div');
    boasVindasElement.classList.add('chat-message');
    boasVindasElement.classList.add('bot-message');
    boasVindasElement.innerText = 'Olá! Bem-vindo ao Chatbot de Animais. Como posso ajudar você?';
    chatMessages.appendChild(boasVindasElement);
  }
  
          // Função para exibir a resposta do chatbot
  function exibirResposta(resposta) {
    var chatMessages = document.getElementById('chat-messages');
    var respostaElement = document.createElement('div');
    respostaElement.classList.add('chat-message');
    respostaElement.classList.add('bot-message');
    respostaElement.innerText = resposta;
    chatMessages.appendChild(respostaElement);
  }
  
  // Função para exibir as opções numeradas
  function exibirOpcoes() {
    var chatMessages = document.getElementById('chat-messages');
    var opcoesElement = document.createElement('div');
    opcoesElement.classList.add('chat-message');
    opcoesElement.classList.add('bot-message');
    opcoesElement.innerText = 'Por favor, escolha uma opção numerada:\n1. Qual é a expectativa de vida dos gatos?\n2. Qual é a melhor ração para gatos?\n3. Outra pergunta\n4. Mais uma pergunta';
    chatMessages.appendChild(opcoesElement);
  }
  
  // Função para tratar a pergunta do usuário
  function tratarPergunta(pergunta) {
    var resposta;
    switch (pergunta) {
      case '1':
        resposta = 'A expectativa de vida média dos gatos é de cerca de 15 anos.';
        break;
      case '2':
        resposta = 'Existem várias marcas de rações de qualidade para gatos, é importante consultar um veterinário para escolher a melhor opção para o seu gato.';
        break;
      // Adicione mais opções de perguntas aqui
      default:
        resposta = 'Meoww, não tenho resposta para isso!';
    }
    exibirResposta(resposta);
  }
  
  // Função para capturar o input do usuário
  function capturarInput(event) {
    if (event.keyCode === 13) {
      var userInput = document.getElementById('user-input');
      var pergunta = userInput.value;
      var chatMessages = document.getElementById('chat-messages');
      var perguntaElement = document.createElement('div');
      perguntaElement.classList.add('chat-message');
      perguntaElement.classList.add('user-message');
      perguntaElement.innerText = pergunta;
      chatMessages.appendChild(perguntaElement);
      userInput.value = '';
  
      // Verifica se a pergunta é um número válido
      if (!isNaN(pergunta)) {
        tratarPergunta(pergunta);
      } else {
        exibirResposta('Meoww, por favor, digite o número da pergunta!');
      }
    }
  }
  
  // Captura o evento de pressionar a tecla Enter no campo de input
  document.getElementById('user-input').addEventListener('keydown', capturarInput);
   // Exibe a mensagem de boas-vindas no início
   exibirBoasVindas();
  
  // Exibe as opções numeradas no início
  exibirOpcoes();