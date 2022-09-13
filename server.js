/**
 * Module dependencies.
 */
const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const propertyApi = require('./server/property/index');
const https = require('https');

app.use(express.static(path.join(__dirname, 'dist/property-proj')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/property-proj/index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/property', propertyApi);

let port = process.env.PORT || 3000;
const server = https.createServer(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/node-property", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

module.exports = app;