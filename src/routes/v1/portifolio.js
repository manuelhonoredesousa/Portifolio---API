const router = require("express").Router();
const PortifolioModel = require("../../models/v1/portifolio");

router.get("/", async (req, res) => {
  try { 
    const portifolio = await PortifolioModel.find({});
    const myPortifolioData = portifolio[0]
    const toSend = {
      name: myPortifolioData.name,
      birthday: myPortifolioData.birthday,
      adress: myPortifolioData.adress,
      avatar: myPortifolioData.avatar,
      languages: myPortifolioData.languages.map((item) => {return {["idiom"]: item.idiom,["description"]: item.description}}),
      skills: myPortifolioData.skills.map((item) => {return {["name"]: item.name,["icon"]: item.icon, ["alt"]:item.alt}}),
      courses: myPortifolioData.courses,
      degree: myPortifolioData.degree.map((item) => {return {["institution"]: item.institution,["description"]: item.description}}),
      projects: myPortifolioData.projects.map((item) => {return {["name"]: item.name,["description"]: item.description, ["thumbnail"]:item.thumbnail, ["sourceCode"]:item.sourceCode, ["viewproject"]:item.viewproject, ["tags"]:item.tags}}),
      contacts: myPortifolioData.contacts.map((item) => {return {["name"]: item.name,["contacts"]: item.contacts}}),
    }
    return res.status(200).json(toSend);
  } catch (err) {return res.status(500).json({ response: "error", sms: `Erro ao obter os portifolios. ${err}`})}
});

module.exports = router