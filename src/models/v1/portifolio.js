const mongoose = require("mongoose");

const PortifolioSchema = new mongoose.Schema({
    name: String,
    birthday: String,
    adress: String,
    avatar: Array,
    languages: [{ idiom: String, description: String }],
    skills: [{ name: String, icon: String, alt: String}],
    courses: Array,
    degree: [{ institution: String, description: String,}],
    projects: [{ name: String, description: String, thumbnail: String, sourceCode: String, viewproject: String, tags: Array}],
    contacts: [{name: String, contacts: Array}]
});
module.exports = mongoose.model("portifolio", PortifolioSchema);
