const mongoose = require("mongoose");
const db_name = "";

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
