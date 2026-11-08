// Usado no perfil.html (precisa do usuarios.js carregado antes)

var formPerfil = document.getElementById("form-perfil");
var mensagem = document.getElementById("mensagem");

carregarUsuarios(function (lista) {
    var emailLogado = localStorage.getItem("logado");
    var posicao = -1;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].email == emailLogado) {
            posicao = i;
        }
    }

    if (posicao == -1) {
        return;
    }

    document.getElementById("nome").value = lista[posicao].nome;
    document.getElementById("email").value = lista[posicao].email;

    formPerfil.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;

        if (nome == "" || email == "") {
            mensagem.style.color = "#ff6b6b";
            mensagem.innerText = "Nome e e-mail não podem ficar vazios.";
            return;
        }

        for (var i = 0; i < lista.length; i++) {
            if (lista[i].email == email && i != posicao) {
                mensagem.style.color = "#ff6b6b";
                mensagem.innerText = "Esse e-mail já está em uso.";
                return;
            }
        }

        lista[posicao].nome = nome;
        lista[posicao].email = email;

        if (senha != "") {
            lista[posicao].senha = senha;
        }

        salvarUsuarios(lista);
        localStorage.setItem("logado", email);

        document.querySelector(".nome-perfil").innerText = nome;
        document.getElementById("senha").value = "";
        mensagem.style.color = "#4cd964";
        mensagem.innerText = "Dados salvos com sucesso!";
    });
});
