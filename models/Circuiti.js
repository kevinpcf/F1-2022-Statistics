const mongoose = require("mongoose");

const circuitoSchema = new mongoose.Schema({
  Round: {
    type: Number,
    required: true,
  },
  Circuito: {
    type: String,
    required: true,
  },
  Paese: {
    type: String,
    required: true,
  },
  Data: {
    type: String,
    required: true,
  },
  Lunghezza_Giro: {
    type: Number,
    required: true,
  },
  Numero_Giri: {
    type: Number,
    required: true,
  },
  Lunghezza_Gara: {
    type: Number,
    required: true,
  },
  Recorde_Vittorie: {
    type: String,
    required: true,
  },
  Pole_Position: {
    type: String,
    required: true,
  },
  Vincitore: {
    type: String,
    required: true,
  },
  Secondo_Posto: {
    type: String,
    required: true,
  },
  Terzo_Posto: {
    type: String,
    required: true,
  },
});

const Circuiti = mongoose.model("Circuiti", circuitoSchema);

module.exports = Circuiti;
