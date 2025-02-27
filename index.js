require('dotenv').config(); // Charger les variables d'environnement

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Utiliser la variable d'environnement

app.use(express.json()); // Middleware pour parser les JSON

// Route GET
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// Route POST
app.post('/api/message', (req, res) => {
    const { message } = req.body;
    res.json({ received: message });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
