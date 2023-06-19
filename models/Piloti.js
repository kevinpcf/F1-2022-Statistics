const mongoose = require("mongoose");

const PilotiSchema = new mongoose.Schema({
  Pilota: String,
  Nazionalita: String,
  Eta: String,
  Team: String,
  Punti: String,
  Bahrain: String,
  Arabia_Saudita: String,
  Australia: String,
  Imola: String,
  Miami: String,
  Spagna: String,
  Monaco: String,
  Azerbaigian: String,
  Canada: String,
  Gran_Bretagna: String,
  Austria: String,
  Francia: String,
  Ungheria: String,
  Belgio: String,
  Olanda: String,
  Italia: String,
  Singapore: String,
  Giappone: String,
  Stati_Uniti: String,
  Messico: String,
  Brasile: String,
  Abu_Dhabi: String,
});

const Piloti = mongoose.model("Piloti", PilotiSchema);

module.exports = Piloti;
