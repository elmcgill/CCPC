const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cors = require('cors');
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();
const port = 5000;

//Connect to the database with mongoose
mongoose.connect(`mongodb://${process.env.DB_IP}/ccpc_db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Setup middleware
app.use(bodyparser.json());
app.use(cors());

//Super simple get request
app.get('/', (req, res) => {
    res.send("Simple get request");
});

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});