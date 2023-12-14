var passbar = document.querySelector('.passbar')

function generatePassword() {
  const length = document.getElementById('length').value;
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$';
  let password = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById('password').textContent = password;

  passbar.style.display = 'block'
}

function copyText() {
  var copyText = document.getElementById("password");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  alert("Texto copiado para area de transferencia");
}