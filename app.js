// app.js
const express = require('express');
const app = express();
const baza = require('./bazaKonekcija');
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('view options', { layout:'layout.ejs' });
app.use(express.static(__dirname + '/content'));

// Routes
const homeController = require('./controllers/homeController');
const mereController = require('./controllers/mereController');

app.get('/', homeController.index);
app.get('/index', homeController.index);
app.get('/about', homeController.about);
app.get('/home', homeController.home);
app.get('/contact', homeController.contact);
app.get('/fizickevelicine', mereController.fv);
app.get('/izlistajFV', mereController.izlistajFV);
app.get('/jedinicemere', mereController.jm);
app.get('/izlistajJM', mereController.izlistajJM);

app.get('/konverzije', mereController.konverzije);
app.get('/konverzijeJM', mereController.konverzijeJM);

app.get('/unosFV', mereController.unosFV);
app.get('/ispravkeFV', mereController.ispravkeFV);
app.get('/brisanjeFV', mereController.brisanjeFV);

app.get('/unosJM', mereController.unosJM);
app.get('/ispravkeJM', mereController.ispravkeJM);
app.get('/brisanjeJM', mereController.brisanjeJM);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});