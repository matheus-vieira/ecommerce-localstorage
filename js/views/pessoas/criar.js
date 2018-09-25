window.onload = function () {
    var txtNome = document.getElementById('txtNome');
    var txtSobreNome = document.getElementById('txtSobreNome');
    var txtDataNascimento = document.getElementById('txtDataNascimento');
    var pessoasController = controller('pessoas', Pessoa);
    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            var pessoa = new Pessoa({
                nome: txtNome.value,
                sobreNome: txtSobreNome.value,
                dataNascimento: txtDataNascimento.valueAsDate
            });
            pessoasController.add(pessoa);
        });
}