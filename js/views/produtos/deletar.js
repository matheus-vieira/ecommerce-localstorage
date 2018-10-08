window.onload = function () {
    var x = new UrlParams('Produtos/Deletar');
    if (!x.params.id)
        return window.location = '../';

    var produto = produtosController.get('id', x.params.id);

    if (!produto)
        return window.location = '../';

    var txtNome = document.getElementById('txtNome');
    var txtDescricao = document.getElementById('txtDescricao');
    var txtPreco = document.getElementById('txtPreco');
    var txtCategoria = document.getElementById('txtCategoria');
    
    txtNome.value = produto.nome;
    txtDescricao.value = produto.descricao;
    txtPreco.value = produto.preco;
    txtCategoria.value = produto.categoria;

    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            produtosController.remove(produto);
            window.location = '../';
        });
}