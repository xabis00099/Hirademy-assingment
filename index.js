const express = require('express');
const dotenv = require('dotenv');
const app = express();
const assistantRoutes = require('./routes/assistantRoutes');
const db = require('./connectdb');

app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
})

app.use("/assistant", assistantRoutes);

db.query('SELECT 1').then((data) => console.log('DB connected')).catch(err => console.log('db connection failed', err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening to port: ${port}`));