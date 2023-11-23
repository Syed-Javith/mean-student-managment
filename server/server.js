const express = require('express');
const connectToDB = require('./db');
const app = express();
const bodyParser = require('body-parser');
const corsMiddleware = require('./middlewares/corsMiddleware');
const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/studentRoutes')
const authRoutes = require('./routes/authRoutes');
const connectoPort = require('./port');


connectToDB();

app.use(corsMiddleware)
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())

app.use('/',studentRoutes)
app.use('/',authRoutes)
app.use('/',adminRoutes)

connectoPort();