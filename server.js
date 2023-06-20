const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const Piloti = require("./models/Piloti");
const { MongoClient, ServerApiVersion } = require("mongodb");
const prova = require("./models/prova");
const { ObjectId } = require("mongodb");

const app = express();

const compiler = webpack(webpackConfig);
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

mongoose
  .connect(
    "mongodb+srv://F1-2022-Statistics:F12022Statistics@f1-2022-statistics.m4cr5ea.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    const connection = mongoose.connection;

    connection.on("connected", function () {
      console.log("Database connesso");
    });
    connection.on("disconnected", function () {
      console.log("Database disconnesso");
    });
    connection.on(
      "Errore",
      console.error.bind(console, "Errore di connessione:")
    );

    console.log("stato" + mongoose.connection.readyState);

    app.use(bodyParser.json());

    // CORS permessi browser
    app.use((request, response, next) => {
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
      );
      response.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      next();
    });

    const port = process.env.PORT || 3000;

    app.use(express.static(path.join(__dirname, "dist")));
    //app.use(express.json());
    const database = new MongoClient(
      "mongodb+srv://F1-2022-Statistics:F12022Statistics@f1-2022-statistics.m4cr5ea.mongodb.net/?retryWrites=true&w=majority"
    ).db("F1-2022-Statistics");

    app.get("/piloti", async (req, res, next) => {
      const piloti = await database.collection("Piloti").find().toArray();
      res.status(200).json({ piloti: piloti });
    });

    app.get("/circuiti", async (req, res) => {
      try {
        const circuiti = await database.collection("Circuiti").find().toArray();
        res.status(200).json({ circuiti: circuiti });
      } catch (error) {
        console.error("Errore durante la ricerca dei circuiti:", error);
        res.status(500).json({
          error: "Si è verificato un errore durante la ricerca dei circuiti.",
        });
      }
    });

    app.post("/inserisci_pilota", async (req, res) => {
      try {
        const pilota = req.body.pilota;

        // regex

        const nuovoPilota = await Piloti.create(pilota);
        res.status(201).json(nuovoPilota);
      } catch (error) {
        console.error("Errore durante l'inserimento del pilota:", error);
        res
          .status(500)
          .json({ error: "Errore durante l'inserimento del pilota" });
      }
    });

    app.post("/aggiorna_pilota", async (req, res) => {
      try {
        const object = req.body.pilota;

        // regex

        const pilota = await Piloti.findById(object.id);
        if (!pilota) {
          return res.status(404).json({ error: "Pilota non trovato" });
        }

        // Aggiorna i campi del pilota con i nuovi valori
        pilota.nome = object.nome;
        pilota.cognome = object.cognome;
        // Aggiungi altri campi da aggiornare

        const pilotaAggiornato = await pilota.save();
        res.status(201).json(pilotaAggiornato);
      } catch (error) {
        console.error("Errore durante l'aggiornamento del pilota:", error);
        res
          .status(500)
          .json({ error: "Errore durante l'aggiornamento del pilota" });
      }
    });

    app.post("/cancella_pilota", async (req, res) => {
      try {
        await database
          .collection("Piloti")
          .findOneAndDelete({ Pilota: req.body.pilota });
        res.status(200).json("ok");
      } catch (error) {
        console.error("Errore durante la ricerca del pilota:", error);
        res.status(500).json({
          error: "Si è verificato un errore durante la ricerca dei piloti.",
        });
      }
    });

    app.post("/inserisci_circuito", async (req, res) => {
      try {
        const circuito = req.body.circuito;

        // regex

        const nuovoCircuito = await Circuiti.create(circuito);
        res.status(201).json(nuovoCircuito);
      } catch (error) {
        console.error("Errore durante l'inserimento del circuito:", error);
        res
          .status(500)
          .json({ error: "Errore durante l'inserimento del circuito" });
      }
    });

    app.post("/aggiorna_circuito", async (req, res) => {
      try {
        const object = req.body.circuito;

        // regex

        const circuito = await Circuiti.findById(object.id);
        if (!circuito) {
          return res.status(404).json({ error: "Circuito non trovato" });
        }

        // Aggiorna i campi del circuito con i nuovi valori
        circuito.nome = object.nome;
        circuito.paese = object.paese;

        // Aggiungi altri campi da aggiornare

        const circuitoAggiornato = await circuito.save();
        res.status(201).json(circuitoAggiornato);
      } catch (error) {
        console.error("Errore durante l'aggiornamento del circuito:", error);
        res
          .status(500)
          .json({ error: "Errore durante l'aggiornamento del circuito" });
      }
    });

    app.post("/cancella_circuito", async (req, res) => {
      try {
        await database
          .collection("Circuiti")
          .findOneAndDelete({ Circuito: req.body.circuito });
        res.status(200).json("ok");
      } catch (error) {
        console.error("Errore durante la ricerca dei circuiti:", error);
        res.status(500).json({
          error: "Si è verificato un errore durante la ricerca dei circuiti.",
        });
      }
    });

    //  Avvia il server sulla porta specificata
    app.listen(port, () => {
      console.log(`Server avviato sulla porta ${port}`);
    });
  });
