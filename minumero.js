const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Simulación de base de datos en memoria
let users = [];
let idCounter = 1;

// CREATE - Crear un nuevo usuario
app.post('/users/createUser', (req, res) => {
    const user = {
        id: idCounter++,
        name: req.body.name,
        email: req.body.email
    };

    if (user) {
        res.status(400).json("No se pudo crear el usuario")
    }

    users.push(user);
    res.status(201).json(user);
});

// READ - Obtener todos los usuarios
app.get('/users', (req, res) => {
    res.json(users);
});

// READ - Obtener un usuario por id
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// UPDATE - Actualizar un usuario por id
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// DELETE - Eliminar un usuario por id
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
        users.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
