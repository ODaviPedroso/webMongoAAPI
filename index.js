// const express = require('express');
// const app = express();
// const userRoutes = require('./routes/userRoutes');
// const articleRoutes = require('./routes/articleRoutes');
// const db = require('./db');
// app.use(express.json());
// app.use('/api/users', userRoutes);
// app.use('/api/articles', articleRoutes);
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
const db = require('./db');

// Configuração do CORS para permitir solicitações apenas de http://localhost:3001
app.use(cors({
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

