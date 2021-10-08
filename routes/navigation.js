var express = require('express');
const { Octokit } = require("@octokit/rest");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const github = new Octokit();

var router = express.Router();
const owner = "ISicily"
const repo = "ISicily"

/* GET document. */
router.get('/', async function(req, res, next) {
  const isicilyID = req.query.id;
  const navigationRef = req.query.ref
  const response = await github.rest.repos.getContent({owner,repo,path: `inscriptions/${isicilyID}.xml`})
  const buff = Buffer.from(response.data.content, 'base64');
  const str = buff.toString('utf-8');
  const { document } = (new JSDOM(str)).window;
  console.log(document)
  console.log(JSON.stringify(document))
  console.log(document.querySelector("title").textContent); // "Hello world"
  res.json(str)
});

module.exports = router;
