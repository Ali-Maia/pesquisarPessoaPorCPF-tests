function pesquisarPessoaPorCPF(cpf) {
  const pessoas = [
    {
      nome: 'julio',
      cpf: '123456789',
      frutasFavoritas: ['maçã', 'abacaxi'],
    },
    {
      nome: 'julio',
      cpf: '123456788',
      frutasFavoritas: ['goiaba', 'maracujá'],
    },
    {
      nome: 'isabelle',
      cpf: '987654321',
      frutasFavoritas: ['abacaxi', 'maçã'],
    },
    {
      nome: 'priscila',
      cpf: '987654322',
      frutasFavoritas: ['mamão', 'banana'],
    },
    {
      nome: 'carlos',
      cpf: '987654332',
      frutasFavoritas: ['laranja', 'manga'],
    },
    {
      nome: 'lucas',
      cpf: '987654532',
      frutasFavoritas: ['manga', 'abacate'],
    },
    {
      nome: 'camila',
      cpf: '287654532',
      frutasFavoritas: ['manga', 'maçã'],
    }
  ];

  const regexNumeros = /^\d+$/

  if ((regexNumeros.test(cpf) == false) || (cpf.length < 9)){
    return 'CPF inválido'
  }
  else {
    for (let indice = 0; indice < pessoas.length; indice++){
      if (cpf == pessoas[indice].cpf){
        return pessoas[indice]
      } 
    }
  }

  return 'CPF não encontrado'

}

module.exports = {
  pesquisarPessoaPorCPF
}