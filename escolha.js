var animais = [
  { nome: "Gato", imagem: "../imagens-video/gato.gif", som: "../audio/gatoaudio.mp3", legenda: "Banguela<br><br>Eu sou um felino curioso e astuto que sabe tudo sobre o mundo dos gatos. Com meus olhos aguçados, eu observo cada movimento ao meu redor. Meu conhecimento sobre os segredos felinos é inigualável.<br><br>Então, deixe-me guiar você por esse mundo intrigante dos gatos. Juntos, vamos explorar os comportamentos, cuidados, alimentação dos nossos amigos felinos e descobrir o que torna essas criaturas tão fascinantes e encantadoras." },
  { nome: "Cachorro", imagem: "../imagens-video/cachorro.gif", som: "../audio/cachorroaudio.mp3", legenda: "Tião<br><br>Eu sou o Cachorro Alegria! Estou sempre pronto para espalhar felicidade com meu espírito brincalhão e lealdade inabalável. Como um verdadeiro amigo, estou ao seu lado em todas as aventuras da vida.<br><br>Com minha energia contagiante, adoro correr, pular e explorar o mundo ao meu redor. Cada novo cheiro e cada nova descoberta me enchem de alegria. Estou sempre em busca de diversão e momentos emocionantes.<br><br>Sou um companheiro leal que traz amor incondicional à sua vida. Vamos compartilhar momentos maravilhosos e criar memórias incríveis juntos!" },
  { nome: "Papagaio", imagem: "../imagens-video/papagaio.gif", som: "../audio/papagaioaudio.mp3", legenda: "Lago<br><br>Olá, sou o Papagaio Falante! Com minhas belas penas coloridas e habilidade de imitar sons, sou um verdadeiro showman. Adoro entreter e surpreender com minha fala divertida e cheia de personalidade.<br><br>Se você quer uma companhia animada e comunicativa, eu sou o parceiro perfeito. Vamos embarcar em uma jornada de amizade e descoberta, explorando o mundo dos pássaros com leveza e doçura." }
];
var animalIndex = 0;

function trocarAnimal(direcao) {
  animalIndex += direcao;

  if (animalIndex < 0) {
    animalIndex = animais.length - 1;
  } else if (animalIndex >= animais.length) {
    animalIndex = 0;
  }

  var animal = animais[animalIndex];
  var animalImage = document.getElementById('animalImage');
  var animalCaption = document.getElementById('animalCaption');
  var audioSource = document.getElementById('audioSource');

  animalImage.src = animal.imagem;
  animalImage.alt = animal.nome;
  animalCaption.innerHTML = animal.legenda; // Atualiza a legenda

  audioSource.src = animal.som;

  var audioElement = document.getElementById('audioElement');
  audioElement.load();
}


function fazerSom() {
  var audioElement = document.getElementById('audioElement');
  audioElement.play();

 
 
  audioElement.addEventListener('ended', redirecionar);
  
  
}

trocarAnimal(0);
function redirecionar() {
  var animal = animais[animalIndex];

  // Redireciona para a página de chat com base no animal escolhido
  if (animal.nome === "Gato") {
    window.location.href = "chatgato.html";
  } else if (animal.nome === "Cachorro") {
    window.location.href = "chatcachorro.html";
  } else if (animal.nome === "Papagaio") {
    window.location.href = "chatpapagaio.html";
  }
 
}



