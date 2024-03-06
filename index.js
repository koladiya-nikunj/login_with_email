const express = require('express'); 
const app = express(); 
const session = require('express-session');
require('dotenv').config();

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET 
}));

app.set('view engine', 'ejs');

const userRoutes = require('./routes/userRoute');
app.use('/',userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is runnig on ${process.env.PORT}`)
}) 