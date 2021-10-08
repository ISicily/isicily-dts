var express = require('express');
const { Octokit } = require("@octokit/rest");
const github = new Octokit();
var router = express.Router();
const owner = "ISicily"
const repo = "ISicily"

/* GET document. */
router.get('/', async function(req, res, next) {
  let isicilyID = req.query.id;
  const response = await github.rest.repos.getContent({owner,repo,path: `inscriptions/${isicilyID}.xml`})
  const buff = Buffer.from(response.data.content, 'base64');
  const str = buff.toString('utf-8');
  res.json(str)
});

module.exports = router;
