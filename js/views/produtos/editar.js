window.onload = function () {
    // pegar o identificador de quem quero editar
    var x = new UrlParams('Produtos/Editar');
    if (!x.params.id)
        return window.location = '../';

    var produto = produtosController.get('id', x.params.id);

    if (!produto)
        return window.location = '../';

    var $txtNome = $('#txtNome');
    var $txtDescricao = $('#txtDescricao');
    var $txtPreco = $('#txtPreco');
    var $txtCategoria = $('#txtCategoria');
    
    $txtNome.val(produto.nome);
    $txtDescricao.val(produto.descricao);
    $txtPreco.val(produto.preco);
    $txtCategoria.val(produto.categoria);

    $('#btnSalvar').on('click', () => validacao() && salvar());

    function salvar() {
        produto.nome = $txtNome.val();
        produto.descricao = $txtDescricao.val();
        produto.preco = Number.parseFloat($txtPreco.val());
        produto.categoria = $txtCategoria.val();
        produtosController.update(produto);
        window.location = '../';
    }

    function validacao() {
        if (!$txtNome.val())
            return false;
        
        var p = Number.parseFloat($txtPreco.val());
        if (isNaN(p) || p < 0)
            return false;

        return true;
    }
}