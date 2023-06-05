const express = require('express');
const livroDAO = require('../modelo/livro-dao');

const router = express.Router();

// Resposta para a rota raiz - Método GET
router.get('/', async (req, res) => {
  try {
    const livros = await livroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    console.error('Erro ao obter os livros:', error);
    res.status(500).json({ error: 'Erro ao obter os livros' });
  }
});

// Resposta para a rota raiz - Método POST
router.post('/', async (req, res) => {
  const livro = req.body;

  try {
    const novoLivro = await livroDAO.incluir(livro);
    res.json({ message: 'Livro incluído com sucesso', livro: novoLivro });
  } catch (error) {
    console.error('Erro ao incluir o livro:', error);
    res.status(500).json({ error: 'Erro ao incluir o livro' });
  }
});

// Resposta para a rota raiz concatenada com um segmento com o código do livro (_id) - Método DELETE
router.delete('/:codigo', async (req, res) => {
  const codigo = req.params.codigo;

  try {
    const resultado = await livroDAO.excluir(codigo);
    if (resultado.deletedCount > 0) {
      res.json({ message: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao excluir o livro:', error);
    res.status(500).json({ error: 'Erro ao excluir o livro' });
  }
});

module.exports = router;
