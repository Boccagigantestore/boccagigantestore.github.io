const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

// Usa il middleware per il body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura il middleware per le sessioni
app.use(session({
  secret: 'your-session-secret', // Usa una stringa segreta unica
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Impostato su false se non usi https
}));

// Serve file statici (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rendi accessibile la cartella con i file CSS, JS e immagini
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // modifica con il nome del tuo file principale
});

// Esegui il server sulla porta 3000
app.listen(3000, () => {
  console.log('Server avviato su http://localhost:3000');
});
