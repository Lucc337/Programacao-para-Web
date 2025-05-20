const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const router = require('./router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
