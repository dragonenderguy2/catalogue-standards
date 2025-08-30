const express = require('express');
const mongoose = require('mongoose');
const normeRoutes = require('./routes/normeRoutes');

const app = express();
app.use(express.json());
app.use('/normes', normeRoutes);

mongoose.connect('mongodb://localhost/catalogue-standards', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.listen(3000, () => {
    console.log('Serveur tournant sur le port 3000...');
  });
}).catch(err => console.error(err));
