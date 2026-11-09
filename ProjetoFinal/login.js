// Usado no login.html e no cadastro.html (precisa do usuarios.js carregado antes)

var formLogin = document.getElementById("form-login");
var formCadastro = document.getElementById("form-cadastro");
var mensagem = document.getElementById("mensagem");

if (formLogin != null) {
    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;

        if (email == "" || senha == "") {
            mensagem.innerText = "Preencha o e-mail e a senha.";
            return;
        }

        carregarUsuarios(function (lista) {
            var encontrado = false;

            for (var i = 0; i < lista.length; i++) {
                if (lista[i].email == email && lista[i].senha == senha) {
                    encontrado = true;
                }
            }

            if (encontrado) {
                localStorage.setItem("logado", email);
                window.location.href = "index.html";
            } else {
                mensagem.innerText = "E-mail ou senha incorretos.";
            }
        });
    });
}
