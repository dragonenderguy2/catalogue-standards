const mongoose = require('mongoose');

const normeSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String },
  datePublication: { type: Date, default: Date.now },
  categories: [{ type: String }]
});

module.exports = mongoose.model('Norme', normeSchema);