const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const db = require('./db');
const routes = require('./routes');

const app = express();

app.use(cors({
  origin: 'https://dobrevavictoria.github.io',
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

routes.connect(app);

db.connect()
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log(`Server is listening on :${process.env.PORT}`);
    })
  })
  .catch(err => console.log(err));