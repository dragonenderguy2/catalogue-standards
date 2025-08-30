const express = require('express');
const mongoose = require('mongoose');
const normeRoutes = require('./routes/normeRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON requests
app.use('/normes', normeRoutes); // Routes for norme operations

// Connect to MongoDB and start the server
mongoose.connect('mongodb://localhost/catalogue-standards', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Serveur tournant sur le port 3000...');
    });
  })
  .catch(err => console.error('Erreur de connexion à MongoDB:', err)); // Error handling for connection issues