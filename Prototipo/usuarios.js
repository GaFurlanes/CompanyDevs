function carregarUsuarios(callback) {
    var salvo = localStorage.getItem("usuarios");

    if (salvo != null) {
        callback(JSON.parse(salvo));
        return;
    }

    fetch("usuarios.json")
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            localStorage.setItem("usuarios", JSON.stringify(dados));
            callback(dados);
        })
        .catch(function () {
            alert("Não foi possível ler o usuarios.json. Abra o projeto por um servidor (ex.: Live Server).");
        });
}

function salvarUsuarios(lista) {
    localStorage.setItem("usuarios", JSON.stringify(lista));
}
