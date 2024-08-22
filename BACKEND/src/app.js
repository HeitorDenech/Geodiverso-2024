const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
 
// rotas da aplicação
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter')
const conteudoRouter = require('./routes/conteudoRouter')
 
app.set('port', process.env.PORT);
app.use(express.json());
app.use(cors());

// habilitar utilização em nossa aplicação
app.use('/api', usersRouter);
app.use('/api', loginRouter);  
app.use('/api', conteudoRouter);  
 
module.exports = app;