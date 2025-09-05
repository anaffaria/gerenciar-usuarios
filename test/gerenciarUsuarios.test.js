const { retornarUsuarios, adicionarNovoUsuario} = require("../src/gerenciarUsuarios");
const { expect } = require("chai");

describe("Testar as funções de Gestão de Usuários", function () {
  it("Validar que posso adicionar um novo nome de usuários na lista", function () {
    adicionarNovoUsuario('Maria');
    const listaDeUsuario = retornarUsuarios();
    expect(listaDeUsuario.at(-1)).to.equal('Maria');
  });
});
