const template = {
    "@id" : "http://sicily.classics.ox.ac.uk/inscription/",
    "@type": "Resource",
    "title" : "inscription title goes here",
    "description": "An inscription from ancient Sicily",
    "totalItems": 0,
    "dts:totalParents": 1,
    "dts:totalChildren": 0,
    "dts:dublincore": {
        "dc:title": [{"@language": "en", "@value": "inscription title goes here"}],
        "dc:description": [{
           "@language": "en",
           "@value": "An inscription from ancient Sicily"
        }],
        "dc:type": [
            "dc:Text"
        ],
        "dc:creator": [
            {"@language": "en", "@value": "I.Sicily Contributors"}
        ],
        "dc:contributor": ["I.Sicily Contributors"],
        "dc:language": ["en"]
    },
    "dts:passage": "/api/dts/documents?id=",
    "dts:download": "https://raw.githubusercontent.com/",
    "dts:citeDepth": 2,
    "dts:citeStructure": [
        {
            "dts:citeType": "inscription",
            "dts:citeStructure": [
                {
                    "dts:citeType": "line"
                }
            ]
        }
    ]
}

module.exports = template