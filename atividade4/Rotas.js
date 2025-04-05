const express = require('express');
const app = express();
const port = 3000;

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    if (estoque.find(p => p.id === id)) {
        return res.send('Produto com esse ID já existe.');
    }

    estoque.push({ id, nome, qtd: parseInt(qtd) });
    res.send(`Produto ${nome} adicionado com sucesso!`);
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    const index = estoque.findIndex(p => p.id === id);

    if (index === -1) {
        return res.send('Produto não encontrado.');
    }

    const removido = estoque.splice(index, 1);
    res.send(`Produto ${removido[0].nome} removido com sucesso!`);
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(p => p.id === id);

    if (!produto) {
        return res.send('Produto não encontrado.');
    }

    produto.qtd = parseInt(qtd);
    res.send(`Quantidade do produto ${produto.nome} atualizada para ${produto.qtd}.`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
