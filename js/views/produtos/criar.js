window.onload = function () {
    var $txtNome = $('#txtNome');
    var $txtDescricao = $('#txtDescricao');
    var $txtPreco = $('#txtPreco');
    var $txtCategoria = $('#txtCategoria');
    
    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            var produto = new Produto({
                nome: $txtNome.val(),
                descricao: $txtDescricao.val(),
                preco: $txtPreco.val(),
                categoria: $txtCategoria.val()
            });
            produtosController.add(produto);
        });
}