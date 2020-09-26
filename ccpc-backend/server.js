const express = require('express');

const app = express();
const port = 5000;

//Super simple get request
app.get('/', (req, res) => {
    res.send("Simple get request");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});