const template = {
    "@context": {
        "@vocab": "https://www.w3.org/ns/hydra/core#",
        "dc": "http://purl.org/dc/terms/",
        "dts": "https://w3id.org/dts/api#",
    },
    "@id": "http://http://sicily.classics.ox.ac.uk",
    "@type": "Collection",
    "title" : "I.Sicily",
    "dts:dublincore": {
        "dc:type": ["http://purl.org/dc/dcmitype/Collection"],
        "dc:creator": [
            {"@language": "en", "@value": "Various"}
        ],
        "dc:language": ["en"],
        "dc:title": [{"@language": "en", "@value": "I.Sicily"}],
        "dc:description": [{
           "@language": "en",
            "@value": "A digital corpus of Sicilian inscriptions"
        }]
    },
    "totalItems" : 0,
    "dts:totalParents": 0,
    "dts:totalChildren": 0,
    "member": [
        
    ]
}

module.exports = template