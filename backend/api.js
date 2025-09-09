const express = require('express');
const cors = require('cors');
const { queries } = require('./db');
const app = express();
const PORT = 3030;

app.use(express.json());
app.use(cors())

app.post('/pitch/create', async (req, res) => {
    const { prompt, pitch } = req.body;

    try {
        queries.createPitch({ prompt, pitch }, (err, results) => {
            if (err) {
                return res.status(500).json({ success: false, message: `Erro ao criar o pitch: ${err.message}` });
            }
            res.status(201).json({ success: true });
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: `Erro interno ao criar o pitch: ${error.message}` });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
