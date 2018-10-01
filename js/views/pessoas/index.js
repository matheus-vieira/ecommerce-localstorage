window.onload = function () {
    var tablePessoas = document.getElementById('tablePessoas');
    var pessoasController = controller('pessoas', Pessoa);
    pessoasController.get().forEach(addRow);

    function addRow(item) {
        var row = '<tr>';
        row += '<td>' + item.nome + '</td>';
        row += '<td>' + item.sobreNome + '</td>';
        row += '<td>';
        row += '<a>Editar</a>';
        row += ' | ';
        row += '<a>Deletar</a>';
        row += '</td>';
        row += '</tr>';Produto
        tablePessoas.innerHTML += row;
    }
}