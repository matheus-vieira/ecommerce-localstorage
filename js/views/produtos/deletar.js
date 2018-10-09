window.onload = function () {
    var x = new UrlParams('Produtos/Deletar');
    if (!x.params.id)
        return window.location = '../';

    var produto = produtosController.get('id', x.params.id);

    if (!produto)
        return window.location = '../';

    $('#txtNome').val(produto.nome);
    $('#txtDescricao').val(produto.descricao);
    $('#txtPreco').val(produto.preco);
    $('#txtCategoria').val(produto.categoria);

    $('#btnSalvar').on('click', function (ev) {
        produtosController.remove(produto);
        window.location = '../';
    });
}