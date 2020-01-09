const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectStartDate: {
        type: String,
        required: true
    },
    projectStack: {
        type: String,
        required: true
    }, 
    projectDesc: {
        type: String,
        required: true
    },
    projectGithubLink :{
        type: String,
        required: true
    },
    projectLiveLink :{
        type: String,
        required: true
    },
    projectVisability: {
        type: Boolean,
        required: true
    }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;