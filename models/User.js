/ User.js

// necesitamos importar mongoose
const mongoose = require('mongoose');

// los modelos se crean a partir de un schema
const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  mail: String,
  birthday: Date
});
// el schema describe la pinta de un documento de la coleccion

// creamos el modelo llamando a mongoose.model(nombre, schema)
const User = mongoose.model('User', UserSchema);

// hay que exportar el modelo para usarlo despues en otros archivos
module.exports = User;
// user.js

// usamos express
const express = require('express');

// creamos un router
const router = express.Router();

// importamos el modelo User
// la ruta del archivo del modelo es relativa a la de user.js
const User = require('../../models/User');

// GET a /api/users (todos los usuarios)
router.get('/users', (req, res) => {
  User.find((err, users) => {
    if (err) throw err;
    res.status(200).json(users);
  });
});

// GET a /api/user/id (un solo usuario)
router.get('/user/:id', (req, res) => {
  User.findOne({ id: req.params.id }, (err, user) => {
    if (err) throw err;
    res.status(200).json(user);
  });
});

// hay que exportar el router para usarlo en index.js
module.exports = router;
