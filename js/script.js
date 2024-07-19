let generateBtn = document.getElementById('generate-btn');
let copyBtn = document.getElementById('copy-btn');
let generatedPassword = document.getElementById('generated-password');

generateBtn.onclick = () => {

   let length = document.getElementById('length').value;
   let Lowercase = document.getElementById('lowercase').checked;
   let Uppercase = document.getElementById('uppercase').checked;
   let Numbers = document.getElementById('numbers').checked;
   let Symbols = document.getElementById('symbols').checked;

   let characterSet = '';

   if (Lowercase) {
      characterSet += 'abcdefghijklmnopqrstuvwxyz';
   }
   if (Uppercase) {
      characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   }
   if (Numbers) {
      characterSet += '0123456789';
   }
   if (Symbols) {
      characterSet += '!@#$%^&*()_-+={}[];\':",<.>/?';
   }

   if (!characterSet) {
      alert('Selecione pelo menos uma opção.');
      return;
   }

   let password = '';
   for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
   }

   generatedPassword.textContent = password;
   copyBtn.style.display = 'block';

};

copyBtn.onclick = () => {
   let copy = generatedPassword.textContent;
   navigator.clipboard.writeText(copy)
    .then(() => {
      alert('Senha copiada!');
    })
    .catch(error => {
      alert('Falha em copiar senha: ' + error);
    });
};