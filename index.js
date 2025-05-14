import express from 'express'
const app = express()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.get('/', (req, res) => {

})

app.get('/login')

// Ruta raíz
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Servidor funcionando correctamente.' });
});

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status = (number) => {

    };
    res.status = function (number) {

    };
    res.status = (number) => {

    };
    res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
let PORT;
app.listen(PORT, () => {
    let PORT;
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
