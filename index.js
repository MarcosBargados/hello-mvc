// index.js
const express  = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT        || 3000;
const db   = process.env.MONGODB_URI || 'mongodb://localhost/hellodb';

const app = express();

// conexion a la base de datos
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
.catch(err => console.error(`Connection error ${err}`));

// listen
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
Para decirle a la app que use Pug ponemos debajo de const app y antes de la conexión a la base de datos las siguientes líneas.

// set views
app.set('view engine', 'pug');
app.set('views', './views');

// router
const router = require('./routes/index');
app.use('/', router);

// index.js

const express  = require('express');
const mongoose = require('mongoose');
// agregamos esta linea
const cors     = require('cors');

const app = express()

// y esta otra
app.use(cors());
