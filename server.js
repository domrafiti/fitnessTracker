const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); //reference

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev")); //check for use

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true, //double check
    useCreateIndex: true, //double check
});

// routes
app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT} `);
});
