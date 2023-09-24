const emailSymbol = document.getElementById('emailSymbol');
const emailMessage = document.getElementById('emailMessage');

emailSymbol.addEventListener('click', function() {
  const email = 'stephanytsm@gmail.com';
  navigator.clipboard.writeText(email);
  emailMessage.style.display = 'inline';
  setTimeout(function() {
    emailMessage.style.display = 'none';
  }, 2000);
})
