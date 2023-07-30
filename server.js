import express from "express";
import { engine } from 'express-handlebars';
import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
mongoose.connect(process.env.mongoConnectionUrl)
import subjectsRouter from './routes/subjects.js'
import roroRouter from './routes/roro.js'
import subject from "./models/subject.js";
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use('/subjects', subjectsRouter)
app.use('/roro', roroRouter)

app.listen(process.env.port, () => {
    console.log(`started on http://localhost:${process.env.port}`)
})
