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
    var txtCategoria = document.getElementById('txtCategoria');
    
    txtNome.value = produto.nome;
    txtDescricao.value = produto.descricao;
    txtPreco.value = produto.preco;
    txtCategoria.value = produto.categoria;

    document.getElementById('btnSalvar')
        .addEventListener('click',
            ev => validacao() && salvar());

    function salvar() {
        produto.nome = txtNome.value;
        produto.descricao = txtDescricao.value;
        produto.preco = txtPreco.valueAsNumber;
        produto.categoria = txtCategoria.value;
        produtosController.update(produto);
        window.location = '../';
    }

    function validacao() {
        if (!txtNome.value)
            return false;
        if (isNaN(txtPreco.valueAsNumber) ||
            txtPreco.valueAsNumber < 0)
        return false;

        return true;
    }
}