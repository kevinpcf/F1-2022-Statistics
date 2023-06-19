const express = require("express");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const router = express.Router();
const Piloti = require("./models/Piloti");
const Circuiti = require("./models/Circuiti.js");

const app = express();
const port = process.env.PORT || 3000;

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Il mio sito React</title>
</head>
<body>
  <div id="root"></div>
  <script src="bundle.js"></script>
</body>
</html>
`;

const distDir = path.join(__dirname, "dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const indexPath = path.join(distDir, "index.html");

fs.writeFile(indexPath, htmlContent, (err) => {
  if (err) {
    console.error("Errore durante la scrittura del file index.html:", err);
  } else {
    console.log("File index.html generato con successo nella cartella dist.");
  }
});

// Imposta il percorso della cartella "dist" come percorso statico
app.use(express.static(path.join(__dirname, "dist")));

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

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://F1-2022-Statistics:F12022Statistics@f1-2022-statistics.m4cr5ea.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;

connection.on("connected", function () {
  console.log("Database connesso");
});
connection.on("disconnected", function () {
  console.log("Database disconnesso");
});
connection.on("Errore", console.error.bind(console, "Errore di connessione:"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

router.get("/piloti", async (req, res) => {
  try {
    const piloti = await Piloti.find();
    res.status(200).json(piloti);
  } catch (error) {
    console.error("Errore durante la ricerca dei piloti:", error);
    res.status(500).json({
      error: "Si è verificato un errore durante la ricerca dei piloti.",
    });
  }
});

router.get("/circuiti", async (req, res) => {
  try {
    const circuiti = await Piloti.find();
    res.status(200).json(piloti);
  } catch (error) {
    console.error("Errore durante la ricerca dei circuiti:", error);
    res.status(500).json({
      error: "Si è verificato un errore durante la ricerca dei circuiti.",
    });
  }
});

router.post("/inserisci_pilota", async (req, res) => {
  try {
    const pilota = req.body.pilota;

    // REGEX

    const nuovoPilota = await pilota.save();
    res.status(201).json(nuovoPilota);
  } catch (error) {
    console.error("Errore durante l'inserimento del pilota:", error);
    res.status(500).json({ error: "Errore durante l'inserimento del pilota" });
  }
});

router.post("/aggiorna_pilota", async (req, res) => {
  try {
    const object = req.body.pilota;

    // REGEX

    const pilota = await Pilota.findById(object.id);
    if (!pilota) {
      return res.status(404).json({ error: "Pilota non trovato" });
    }

    const pilotaAggiornato = await pilota.save();
    res.status(201).json(pilotaAggiornato);
  } catch (error) {
    console.error("Errore durante l'aggiornamento del pilota:", error);
    res
      .status(500)
      .json({ error: "Errore durante l'aggiornamento del pilota" });
  }
});

router.post("/cancella_pilota", async (req, res) => {
  try {
    const object = req.body.pilota;

    // REGEX

    const pilota = await Pilota.findById(object.id);
    if (!pilota) {
      return res.status(404).json({ error: "Pilota non trovato" });
    }

    await pilota.remove();
    const listaPiloti = await Piloti.find();
    res.status(201).json(listaPiloti);
  } catch (error) {
    console.error("Errore durante la cancellazione del pilota:", error);
    res
      .status(500)
      .json({ error: "Errore durante la cancellazione del pilota" });
  }
});

router.post("/inserisci_circuito", async (req, res) => {
  try {
    const circuito = req.body.circuito;

    // REGEX

    const nuovoCircuito = await circuito.save();
    res.status(201).json(nuovoCircuito);
  } catch (error) {
    console.error("Errore durante l'inserimento del circuito:", error);
    res
      .status(500)
      .json({ error: "Errore durante l'inserimento del circuito" });
  }
});

router.post("/aggiorna_circuito", async (req, res) => {
  try {
    const object = req.body.circuito;

    // REGEX

    const circuito = await Circuito.findById(object.id);
    if (!circuito) {
      return res.status(404).json({ error: "Circuito non trovato" });
    }

    const circuitoAggiornato = await circuito.save();
    res.status(201).json(circuitoAggiornato);
  } catch (error) {
    console.error("Errore durante l'aggiornamento del circuito:", error);
    res
      .status(500)
      .json({ error: "Errore durante l'aggiornamento del circuito" });
  }
});

router.post("/cancella_circuito", async (req, res) => {
  try {
    const object = req.body.circuito;

    // REGEX

    const circuito = await Circuito.findById(object.id);
    if (!circuito) {
      return res.status(404).json({ error: "Circuito non trovato" });
    }

    await circuito.remove();
    const listaCircuiti = await Piloti.find();
    res.status(201).json(listaCircuiti);
  } catch (error) {
    console.error("Errore durante la cancellazione del circuito:", error);
    res
      .status(500)
      .json({ error: "Errore durante la cancellazione del circuito" });
  }
});

// Avvia il server sulla porta specificata
app.listen(port, () => {
  console.log(`Server avviato sulla porta ${port}`);
});
