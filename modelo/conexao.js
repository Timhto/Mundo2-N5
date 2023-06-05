const mongoose = require('mongoose');

const banco = mongoose;

// Definir a URL do banco de dados MongoDB
const url = 'mongodb://localhost:27017/livraria/';

// Definir as opções de conexão
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// Conectar ao MongoDB
mongoose.connect(url, options)
  .then(() => {
    console.log('Conexão estabelecida com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });

// Exportar a variável 'banco' no padrão de módulo do JavaScript
module.exports = banco;
