var express = require('express');
var router = express.Router();

baseEndpoint = {
  "@context": "/dts/api/contexts/EntryPoint.jsonld",
  "@id": "/dts/api/",
  "@type": "EntryPoint",
  "collections": "/dts/api/collections/",
  "documents": "/dts/api/documents/"
  //"navigation" : "/dts/api/navigation"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(baseEndpoint)
});

module.exports = router;
