// Modules
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const PORT = process.env.PORT || 3001;
const router = require("./controllers");
const compression = require("compression");

// Engine settings
app.set("view engine", "hbs");
app.engine(
    "hbs",
    hbs({
        extname: "hbs",
        defaultLayout: "main",
    })
);

// Middleware
app.use(compression());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(router);

// Server
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server listening on port ${PORT}`);
});
