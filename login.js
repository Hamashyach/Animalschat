function login() {
    // Obter os valores do nome de usuário e senha
    var nomeUsuario = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    // Verifica se algum campo está vazio ou contém apenas espaços em branco
    if (!nomeUsuario.trim() || !senha.trim()) {
    alert("Por favor, preencha todos os campos do formulário de cadastro.");
    return false;
    }

    // Armazenar os valores em cookies
    document.cookie = "nomeUsuario=" + nomeUsuario;
    document.cookie = "senha=" + senha;
    

    // Exibir mensagem de login efetuado com sucesso
    alert("Login efetuado com sucesso!");

    // Redirecionar para a página home.html
    window.location.href = "escolha.html";


}
// Obtenha a referência para o elemento canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Defina as propriedades do texto
ctx.font = "bold 20px Arial";
ctx.fillStyle = "lime"; // cor verde neon
ctx.textAlign = "center";

// Defina o texto a ser exibido
var texto = "Faça o login para prosseguir!";

// Defina as coordenadas para posicionar o texto
var x = canvas.width / 2;
var y = canvas.height / 2;

// Desenhe a caixa retangular
ctx.fillStyle = "black"; // cor de fundo
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Desenhe o texto na caixa
ctx.fillStyle = "lime"; // cor do texto
ctx.fillText(texto, x, y);

const emailSymbol = document.getElementById('emailSymbol');
const emailMessage = document.getElementById('emailMessage');

emailSymbol.addEventListener('click', function() {
const email = 'stephanytsm@gmail.com';
navigator.clipboard.writeText(email);
emailMessage.style.display = 'inline';
setTimeout(function() {
  emailMessage.style.display = 'none';
}, 2000);
});