import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.locals.webname = "SARDOR";

app.get('/', (req, res) => res.render('index'));
app.get('/index.ejs', (req, res) => res.render('index'));
app.get('/login.ejs', (req, res) => res.render('login'));
app.get('/signup.ejs', (req, res) => res.render('signup'));
app.get('/reset.ejs', (req, res) => res.render('reset'));
app.get('/profile.ejs', (req, res) => res.render('profile'));
app.get('/tables.ejs', (req, res) => res.render('tables'));

app.use((req, res) => {
  res.status(404).render('error');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});