const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const uri = "mongodb+srv://root:root@monitorias-db-m2hlw.mongodb.net/test?retryWrites=true&w=majority";
const asesoriaRouter = require('./App/routes/getAsesoria');
const userRouter = require('./App/routes/getUser');

mongoose.connect(uri,{ useNewUrlParser:true});
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1',asesoriaRouter);
app.use('/api/v1/users',userRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});