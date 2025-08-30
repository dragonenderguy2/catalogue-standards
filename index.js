const express = require('express');
const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost/catalogue-standards', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue dans le Catalogue des Normes Ouvertes!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
