const express = require('express');
const Norme = require('../models/Norme');
const router = express.Router();

// Route pour ajouter une nouvelle norme
router.post('/', async (req, res) => {
  const norme = new Norme(req.body);
  try {
    await norme.save();
    res.status(201).send(norme);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route pour obtenir toutes les normes
router.get('/', async (req, res) => {
  try {
    const normes = await Norme.find();
    res.status(200).send(normes);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
