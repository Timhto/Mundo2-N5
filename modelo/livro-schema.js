const banco = require('./conexao');

// Definir a estrutura do banco de dados
const LivroSchema = new banco.Schema({
  
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

// Associar o LivroSchema à coleção "livros" e criar o modelo Livro
const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro
