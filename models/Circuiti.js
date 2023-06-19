const mongoose = require("mongoose");

const Circuiti = mongoose.model(
  "Circuiti",
  new mongoose.Schema({
    Round: Number,
    Circuito: String,
    Paese: String,
    Data: String,
    Lunghezza_Giro: Number,
    Numero_Giri: Number,
    Lunghezza_Gara: Number,
    Recorde_Vittorie: String,
    Pole_Position: String,
    Vincitore: String,
    Secondo_Posto: String,
    Terzo_Posto: String,
  })
);

module.exports = Circuiti;
