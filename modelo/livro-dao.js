const Livro = require('./livro-schema');

// Função para obter todos os livros
const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    console.error('Erro ao obter os livros:', error);
    throw error;
  }
};

// Função para incluir um novo livro
const incluir = async (livro) => {
  try {
    const novoLivro = await Livro.create(livro);
    return novoLivro;
  } catch (error) {
    console.error('Erro ao incluir o livro:', error);
    throw error;
  }
};

// Função para excluir um livro pelo código
const excluir = async (codigo) => {
  try {
    const resultado = await Livro.deleteOne({ _id: codigo });
    return resultado;
  } catch (error) {
    console.error('Erro ao excluir o livro:', error);
    throw error;
  }
};

// Exportar as funções no padrão de módulo do JavaScript
module.exports = {
  obterLivros,
  incluir,
  excluir
};
