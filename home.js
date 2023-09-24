// Função para alternar para o formulário de login
function toggleLoginForm() {
  var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");

  loginForm.style.display = "block";
  registerForm.style.display = "none";
}

// Função para alternar para o formulário de cadastro
function toggleRegisterForm() {
  var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");

  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

// Função para validar o formulário de cadastro
function validateRegisterForm(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  var name = document.getElementById("register-name").value;
  var email = document.getElementById("register-email").value;
  var password = document.getElementById("register-password").value;
  var confirmPassword = document.getElementById("register-confirm-password").value;

  // Verifica se algum campo está vazio ou contém apenas espaços em branco
  if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
    alert("Por favor, preencha todos os campos do formulário de cadastro.");
    return false;
  }

  // Verifica se o email possui formato válido
  if (!validateEmail(email)) {
    alert("Por favor, insira um email válido.");
    return false;
  }

  // Verifica se as senhas correspondem
  if (password !== confirmPassword) {
    alert("As senhas não correspondem!");
    return false;
  }

  // Armazena os dados do formulário de cadastro no localStorage
  localStorage.setItem("registerName", name);
  localStorage.setItem("registerEmail", email);

  alert("Cadastro realizado com sucesso!");

  return true; // Permite o envio do formulário
}



// Função para realizar o login
function login() {
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  // Aqui você precisa realizar a validação das credenciais no servidor.
  // Essa parte depende da sua configuração de backend.

  // Exemplo simplificado de verificação de login:
  if (username === "" && password === "") {
    alert("Login realizado com sucesso!");
    window.location.href = "escolha.html";
    
    // Redirecionar para a página de sucesso do login ou executar outras ações necessárias
  } else {
    alert("Credenciais inválidas. Tente novamente.");
  }
   {
   
  }
}

// Função para validar o formato do email
function validateEmail(email) {
  // Utilize uma expressão regular para verificar o formato de email
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Recupera os dados do formulário de cadastro do localStorage ao carregar a página
window.addEventListener("load", function () {
  var name = localStorage.getItem("registerName");
  var email = localStorage.getItem("registerEmail");

  if (name && email) {
    document.getElementById("register-name").value = name;
    document.getElementById("register-email").value = email;
  }
})

window.addEventListener('load', function() {
  var canvas = document.getElementById('neon-line');
  var context = canvas.getContext('2d');
  var header = document.querySelector('header');
  var headerRect = header.getBoundingClientRect();
  var lineWidth = 4;
  var lineColor = 'rgba(0, 255, 0, 0.8)';
  var lineOffset = 10;
  var lineY = headerRect.bottom + lineOffset;
  var lineSpeed = 2;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawLine() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(0, lineY);
    context.lineTo(canvas.width, lineY);
    context.lineWidth = lineWidth;
    context.strokeStyle = lineColor;
    context.stroke();

    lineY += lineSpeed;

    if (lineY > canvas.height + lineOffset) {
      lineY = headerRect.bottom + lineOffset;
    }

    requestAnimationFrame(drawLine);
  }

  drawLine();
});
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




