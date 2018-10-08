window.onload = function () {
    // pegar o identificador de quem quero editar
    var x = new UrlParams('Produtos/Editar');
    if (!x.params.id)
        return window.location = '../';

    var produto = produtosController.get('id', x.params.id);

    if (!produto)
        return window.location = '../';

    var txtNome = document.getElementById('txtNome');
    var txtDescricao = document.getElementById('txtDescricao');
    var txtPreco = document.getElementById('txtPreco');
    
    txtNome.value = produto.nome;
    txtDescricao.value = produto.descricao;
    txtPreco.value = produto.preco;

    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            produto.nome = txtNome.value;
            produto.descricao = txtDescricao.value;
            produto.preco = txtPreco.valueAsNumber;
            produtosController.update(produto);
            window.location = '../';
        });
}