// Selecionando os botões de login e inscrição
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

// Selecionando o elemento body do documento
var body = document.querySelector("body");

// Adicionando um ouvinte de evento de clique ao botão de login
btnSignin.addEventListener("click", function () {
   // Alterando a classe do elemento body para "sign-in-js" ao clicar no botão de login
   body.className = "sign-in-js"; 
});

// Adicionando um ouvinte de evento de clique ao botão de inscrição
btnSignup.addEventListener("click", function () {
    // Alterando a classe do elemento body para "sign-up-js" ao clicar no botão de inscrição
    body.className = "sign-up-js";
})
