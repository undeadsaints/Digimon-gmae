const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/trigger', (req, res) => {
    const event = req.query.event;
    const digimon = req.query.digimon;

    // Log the event details
    console.log(`Event: ${event}, Digimon: ${digimon}`);

    // Send a simple text response
    res.status(200).send(`You encountered a wild ${digimon}!`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
