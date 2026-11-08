var emailLogado = localStorage.getItem("logado");

carregarUsuarios(function (lista) {
    var usuario = null;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].email == emailLogado) {
            usuario = lista[i];
        }
    }

    if (usuario == null) {
        window.location.href = "login.html";
    } else {
        document.querySelector(".nome-perfil").innerText = usuario.nome;
    }
});

var btnPerfil = document.getElementById("btn-perfil");
var menuPerfil = document.getElementById("menu-perfil");

btnPerfil.addEventListener("click", function () {
    if (menuPerfil.style.display == "block") {
        menuPerfil.style.display = "none";
    } else {
        menuPerfil.style.display = "block";
    }
});

var btnSair = document.querySelector(".menu-perfil button");

btnSair.addEventListener("click", function () {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
});

var btnUpload = document.getElementById("btn-upload");
var popupUpload = document.getElementById("popup-upload");

if (btnUpload != null) {
    var btnCancelar = document.getElementById("btn-cancelar");
    var formUpload = document.getElementById("form-upload");
    var mensagemUpload = document.getElementById("mensagem-upload");

    btnUpload.addEventListener("click", function () {
        popupUpload.style.display = "flex";
    });

    btnCancelar.addEventListener("click", function () {
        popupUpload.style.display = "none";
        formUpload.reset();
        mensagemUpload.innerText = "";
    });

    formUpload.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var fabricante = document.getElementById("fabricante").value;
        var tipo = document.getElementById("tipo").value;
        var modelo = document.getElementById("modelo").value;
        var arquivo = document.getElementById("arquivo").files[0];

        if (fabricante == "" || tipo == "" || modelo == "" || arquivo == null) {
            mensagemUpload.style.color = "#ff6b6b";
            mensagemUpload.innerText = "Preencha todos os campos e escolha um arquivo.";
            return;
        }

        mensagemUpload.style.color = "#4cd964";
        mensagemUpload.innerText = "Coleta " + arquivo.name + " (" + fabricante + " / " + tipo + " / " + modelo + ") pronta para envio!";
        formUpload.reset();
    });
}
