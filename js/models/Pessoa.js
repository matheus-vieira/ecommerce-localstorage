function Pessoa(o) {
    this.id = guid();
    o = o || {};
    this.nome = o.nome;
    this.sobreNome = o.sobreNome;
    this.dataNascimento = o.dataNascimento;
}

var pessoasController = controller('pessoas', Pessoa);