require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

// Init App
const app = express();

// Connect to Mongo
mongoose.connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'portfolio'
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Pulling in models
Project = require('./models/Projects');

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static("public"))

// Bodyparser
app.use(express.urlencoded({
    extended: false
}));

// Routes
app.use('/', require('./routes/index'));

// Processing Stripe Payment
app.use('/add/:password', (req, res) => {
    if (req.params.password == process.env.ADD_PROJECT_PASSWORD) {
        const newProject = new Project({
            projectName: req.body.projectName,
            projectStartDate: req.body.date,
            projectStack: req.body.stack,
            projectPlatform: req.body.projectPlatform,
            projectDesc: req.body.projectDesc,
            projectGithubLink: req.body.gitLink,
            projectLiveLink: req.body.projectLink,
            projectVisability: req.body.visability
        })

        newProject.save().then()
    } else {
        res.status(404) // HTTP status 404: NotFound
            .send('Not found');
    }
    return;
});

const PORT = 8002;

app.listen(PORT, console.log(`Server started on port ${PORT}`));