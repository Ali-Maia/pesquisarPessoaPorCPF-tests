# `pesquisarPessoaPorCPF-tests`

---

## 📄 Descrição

Este repositório contém os **testes unitários** para a função `pesquisarPessoaPorCPF`. Esta função é responsável por realizar a busca de informações de pessoas em uma lista, utilizando o CPF como critério principal. Os testes garantem a correta funcionalidade da pesquisa em diversas situações, incluindo cenários de sucesso, falha e dados inválidos.

## 🛠 Tecnologias Utilizadas

* **JavaScript**: Linguagem de programação principal.
* **Mocha**: Framework de testes JavaScript utilizado para rodar os testes.

## ⚙ Como Rodar os Testes

Para executar os testes unitários deste projeto, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) instalado em sua máquina.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Ali-Maia/pesquisarPessoaPorCPF-tests.git](https://github.com/Ali-Maia/pesquisarPessoaPorCPF-tests.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd pesquisarPessoaPorCPF-tests
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```

### Execução

Após a instalação, você pode rodar todos os testes com o seguinte comando:

```bash
npm test
```

## 📌 Estrutura dos Testes

Os testes estão organizados de forma a cobrir diferentes aspectos da função `pesquisarPessoaPorCPF`:

* **Testes de Sucesso**: Verifica se a função retorna a pessoa correta quando o CPF existe na lista.
* **Testes de Falha**: Verifica se a função se comporta corretamente quando o CPF não é encontrado.
* **Testes de Validação**: Verifica se a função lida apropriadamente com CPFs inválidos ou formatos incorretos.

## ✨ Contribuição

Sinta-se à vontade para abrir issues e pull requests para sugerir melhorias, novos testes ou correções!



