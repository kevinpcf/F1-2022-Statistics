const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const Piloti = require("./models/Piloti");
const { MongoClient, ServerApiVersion } = require("mongodb");

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

    app.post("/pilota", async (req, res) => {
      try {
        const pilota = await database
          .collection("Piloti")
          .findOne({ Pilota: req.body.pilota });
        res.status(200).json({ pilota: pilota });
      } catch {
        console.error("Errore durante la ricerca del pilota:", error);
        res.status(500).json({
          error: "Si è verificato un errore durante la ricerca del pilota",
        });
      }
    });

    app.get("/piloti", async (req, res, next) => {
      const piloti = await database.collection("Piloti").find().toArray();
      res.status(200).json({ piloti: piloti });
    });

    app.post("/filtra_piloti", async (req, res) => {
      const filtro = req.body.request;
      const query = {};

      if (filtro.selected) {
        query.Team = filtro.selected;
      }

      if (filtro.minValue || filtro.maxValue) {
        query.Punti = { $gte: filtro.minValue, $lte: filtro.maxValue };
      }
      const pilotiFiltrati = await database
        .collection("Piloti")
        .find(query)
        .toArray();
      res.status(200).json({ piloti: pilotiFiltrati });
    });

    app.post("/inserisci_pilota", async (req, res) => {
      try {
        const pilota = req.body.pilota;
        const flag = await database
          .collection("Piloti")
          .findOne({ Pilota: pilota.Pilota });
        if (!flag) {
          await database.collection("Piloti").insertOne(pilota);
          res.status(201).json("ok");
        } else {
          res.status(500).json("Pilota già presente");
        }
      } catch (error) {
        pilotaerror("Errore durante l'inserimento del pilota:", error);
        res
          .status(500)
          .json({ error: "Errore durante l'inserimento del pilota" });
      }
    });

    app.post("/aggiorna_pilota", async (req, res) => {
      try {
        const pilota = req.body.pilota;
        const { _id, ...updatedPilota } = pilota;
        await database
          .collection("Piloti")
          .findOneAndUpdate({ Pilota: pilota.Pilota }, { $set: updatedPilota });
        res.status(201).json("ok");
      } catch (error) {
        pilotaerror("Errore durante l'aggiornamento del pilota:", error);
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
        pilotaerror("Errore durante la ricerca del pilota:", error);
        res.status(500).json({
          error: "Si è verificato un errore durante la ricerca dei piloti.",
        });
      }
    });

    app.post("/circuito", async (req, res) => {
      try {
        const circuito = await database
          .collection("Circuiti")
          .findOne({ Circuito: req.body.circuito });
        res.status(200).json({ circuito: circuito });
      } catch {
        pilotaerror("Errore durante la ricerca del circuito:", error);
        res.status(500).json({
          error: "Si è verificato un errore durante la ricerca dei circuito",
        });
      }
    });

    app.get("/circuiti", async (req, res) => {
      try {
        const circuiti = await database
          .collection("Circuiti")
          .find()
          .sort({ Round: 1 })
          .toArray();
        res.status(200).json({ circuiti: circuiti });
      } catch (error) {
        pilotaerror("Errore durante la ricerca dei circuiti:", error);
        res.status(500).json({
          error: "Si è verificato un errore durante la ricerca dei circuiti.",
        });
      }
    });

    app.post("/inserisci_circuito", async (req, res) => {
      try {
        const circuito = req.body.circuito;
        const flag = await database
          .collection("Circuiti")
          .findOne({ Round: circuito.Round });
        if (!flag) {
          await database.collection("Circuiti").insertOne(circuito);
          res.status(201).json("ok");
        } else {
          res.status(500).json("Round già presente");
        }
      } catch (error) {
        pilotaerror("Errore durante l'inserimento del circuito:", error);
        res
          .status(500)
          .json({ error: "Errore durante l'inserimento del circuito" });
      }
    });

    app.post("/aggiorna_circuito", async (req, res) => {
      try {
        const circuito = req.body.circuito;
        const existingCircuito = await database
          .collection("Circuiti")
          .findOne({ Round: circuito.Round });
        if (existingCircuito && !existingCircuito._id.equals(circuito._id)) {
          res.status(500).json("Round già presente");
        } else {
          const { _id, ...updatedCircuito } = circuito;
          await database
            .collection("Circuiti")
            .findOneAndUpdate(
              { Round: circuito.Round, Circuito: circuito.Circuito },
              { $set: updatedCircuito }
            );
          res.status(201).json("ok");
        }
      } catch (error) {
        pilotaerror("Errore durante l'aggiornamento del circuito:", error);
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
        pilotaerror("Errore durante la ricerca dei circuiti:", error);
        res.status(500).json({
          error: "Si è verificato un errore durante la ricerca dei circuiti.",
        });
      }
    });

    app.post("/filtra_circuiti", async (req, res) => {
      const filtro = req.body.request;
      const query = {};

      if (filtro.minValueLunghezzaGara || filtro.maxValueLunghezzaGara) {
        query.Lunghezza_Gara = {
          $gte: parseFloat(filtro.minValueLunghezzaGara),
          $lte: parseFloat(filtro.maxValueLunghezzaGara),
        };
      }

      if (filtro.minValueNumeroGiri || filtro.maxValueNumeroGiri) {
        query.Numero_Giri = {
          $gte: filtro.minValueNumeroGiri,
          $lte: filtro.maxValueNumeroGiri,
        };
      }
      const circuitiFiltrati = await database
        .collection("Circuiti")
        .find(query)
        .toArray();
      res.status(200).json({ circuiti: circuitiFiltrati });
    });

    //  Avvia il server sulla porta specificata
    app.listen(port, () => {
      console.log(`Server avviato sulla porta ${port}`);
    });
  });
