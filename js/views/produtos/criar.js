window.onload = function () {
    var txtNome = document.getElementById('txtNome');
    var txtDescricao = document.getElementById('txtDescricao');
    var txtPreco = document.getElementById('txtPreco');
    var txtCategoria = document.getElementById('txtCategoria');
    
    document.getElementById('btnSalvar')
        .addEventListener('click', function (ev) {
            var produto = new Produto({
                nome: txtNome.value,
                descricao: txtDescricao.value,
                preco: txtPreco.valueAsNumber,
                categoria: txtCategoria.value
            });
            produtosController.add(produto);
        });
}