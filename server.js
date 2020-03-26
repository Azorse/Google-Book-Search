require('dotenv').config()
const express = require("express");

const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Express serve up index.html file if it doesn't recognize route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

//db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBookSearch", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log(`Mongo Connected...`))
    .catch(err => console.log(err));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));