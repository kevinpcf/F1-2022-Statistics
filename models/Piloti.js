const mongoose = require("mongoose");

const pilotaSchema = new mongoose.Schema({
  Pilota: {
    type: String,
    required: true,
  },
  Nazionalita: {
    type: String,
    required: true,
  },
  Eta: {
    type: Number,
    required: true,
  },
  Team: {
    type: String,
    required: true,
  },
  Punti: {
    type: Number,
    required: true,
  },
  Bahrain: {
    type: String,
  },
  Arabia_Saudita: {
    type: String,
  },
  Australia: {
    type: String,
  },
  Imola: {
    type: String,
  },
  Miami: {
    type: String,
  },
  Spagna: {
    type: String,
  },
  Monaco: {
    type: String,
  },
  Azerbaigian: {
    type: String,
  },
  Canada: {
    type: String,
  },
  Gran_Bretagna: {
    type: String,
  },
  Austria: {
    type: String,
  },
  Francia: {
    type: String,
  },
  Ungheria: {
    type: String,
  },
  Belgio: {
    type: String,
  },
  Olanda: {
    type: String,
  },
  Italia: {
    type: String,
  },
  Singapore: {
    type: String,
  },
  Stati_Uniti: {
    type: String,
  },
  Messico: {
    type: String,
  },
  Brasile: {
    type: String,
  },
  Abu_Dhabi: {
    type: String,
  },
});

const Piloti = mongoose.model("Piloti", pilotaSchema);

module.exports = Piloti;
