const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let gameStarted = false; // Initial game state

app.use(bodyParser.json());

app.get('/trigger', (req, res) => {
    const event = req.query.event;
    const digimon = req.query.digimon;

    // Log the event details
    console.log(`Event: ${event}, Digimon: ${digimon}`);

    // Handle the "startgame" event
    if (event === 'startgame') {
        // Set the game state to started
        gameStarted = true;
        console.log('The game has started!');
        res.status(200).send('The adventure begins!'); // Respond to the startgame event
    } else if (gameStarted) {
        // If the game has started, handle other events...

        // Example: Handle the "encounter" event
        if (event === 'encounter') {
            // Additional logic for encounter event
            res.status(200).send(`You encountered a wild ${digimon}!`);
        } else {
            // Other events can be handled here

            // Send a simple text response
            res.status(200).send(`Unrecognized event: ${event}`);
        }
    } else {
        // If the game hasn't started, respond accordingly
        res.status(200).send('The game has not started yet. Use !startgame to begin!');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
