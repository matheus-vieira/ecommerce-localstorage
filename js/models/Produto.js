function Produto(o) {
    this.id = o.id || guid();
    o = o || {};
    this.nome = o.nome;
    this.descricao = o.descricao;
    this.preco = o.preco;
}

var produtosController = controller('produtos', Produto);