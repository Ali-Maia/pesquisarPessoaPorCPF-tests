const {pesquisarPessoaPorCPF} = require('../src/pesquisar')
const {strictEqual} = require('node:assert')

describe('Pesquisar', () => {
  it('Ao informar cpf 987654332 deve retornar nome,cpf e frutas favoritas do carlos', () =>{
    //Arrange
    const cpfPesquisado = '987654332'
    const nomeEsperado = 'carlos'
    const cfpEsperado = '987654332'
    const primeiraFrutaEsperada = 'laranja'
    const segundaFrutaEsperada = 'manga'

    //Act
    const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

    //Assert
    strictEqual(pessoa.nome, nomeEsperado)
    strictEqual(pessoa.cpf, cfpEsperado)
    strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
    strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)

  })

  it('Ao informar um cpf que não existe, deve retornar CPF não encontrado', () => {
    //Arrange
    const cpfPesquisado = '000000000'
    const mensagemEsperada = 'CPF não encontrado'

    //Act
    const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

    //Assert
    strictEqual(pessoa, mensagemEsperada)

  })

  it('Ao informar o cpf 12345678a deve retornar CPF inválido', () => {
    //Arrenge
    const cpfPesquisado = '12345678a'
    const mensagemEsperada = 'CPF inválido'

    //Act
    const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

    //Assert
    strictEqual(pessoa, mensagemEsperada)

  })

  it('Ao informar o cpf 12345678 deve retornar CPF inválido', () => {
    //Arrenge
    const cpfPesquisado = '12345678'
    const mensagemEsperada = 'CPF inválido'

    //Act
    const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

    //Assert
    strictEqual(pessoa, mensagemEsperada)

  })
})