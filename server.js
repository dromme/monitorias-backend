const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const uri = "mongodb+srv://root:root@monitorias-db-m2hlw.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(uri,{ useNewUrlParser:true});
app.use(cors());
app.use(bodyParser.json());

//Space to use routers

//

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});