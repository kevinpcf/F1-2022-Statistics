const mongoose = require("mongoose");

const Piloti = mongoose.model(
  "Piloti",
  new mongoose.Schema({
    Pilota: String,
    Nazionalita: String,
    Eta: Number,
    Team: String,
    Punti: Number,
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
  })
);

module.exports = Piloti;
