var Pessoa = (function () {
    var id = 1
    return function Pessoa(o) {
        this.id = id++;
        o = o || {};
        this.nome = o.nome;
        this.sobreNome = o.sobreNome;
        this.dataNascimento = o.dataNascimento;
    }    
})();