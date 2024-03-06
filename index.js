require('dotenv').config();

const express = require('express'); 
const app = express(); 
const session = require('express-session');
const path = require('path');

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET 
}));
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const userRoutes = require('./src/routes/userRoute');
app.use('/',userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is runnig on ${process.env.PORT}`)
}) 