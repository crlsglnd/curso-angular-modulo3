const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let elementos = [];

app.get('/elementos', (req, res) => {
    res.json(elementos);
});

app.post('/elementos', (req, res) => {
    const nuevo = req.body;
    elementos.push(nuevo);
    res.json({ ok: true, elemento: nuevo });
});

app.listen(3000, () => {
    console.log('API corriendo en http://localhost:3000');
});