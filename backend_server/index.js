//Imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import expressSession from 'express-session';


import login from './routes/login.js';
import register from './routes/register.js';
import rest from './routes/REST.js';
import dataBase from './routes/dataBaseConnection.js';
import User from './models/userInfo.js'

//Connects mongoose to database
dataBase.connectMongoose();

const app = express();

//Initializes passport
app.use(passport.initialize());
app.use(passport.session());

//Sets up express session
app.use(expressSession({
    secret: "hatch",
    resave: false,
    saveUninitialized: false
}))

//JSON Stuff
app.use(express.json());
app.use(express.urlencoded());

//Sets up passport functionality
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Sets up routes
app.use('/login', login);
app.use('/register', register);
app.use('/DBInfo', rest);


//Listens on port 5000
const port = process.env.PORT || '5000';
app.listen(port);



 

export default app;
