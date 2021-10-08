# isicily-dts

Implementation of the DTS API for the [I.Sicily EpiDoc Github repository](https://github.com/ISicily/ISicily)

This is a proof of concept that demonstrates that a DTS API can be implemented for a collection of epidoc files kept in a Github repository by translating DTS calls to Github API calls.

Our conclusion is that a fully featured DTS API should be doable using the Github API.

# Deployment

This repository is automagically redeployed to [https://isicily-dts.herokuapp.com](https://isicily-dts.herokuapp.com) whenever a change is committed.  Check it out there.

# Details

Uses the [@octokit/rest](https://www.npmjs.com/package/@octokit/rest) library to make calls to the I.Sicily Github repository.  So, whenever a request is made to the DTS API -- i.e, the DTS 
API implemented by this repo,an instance of which is running at [https://isicily-dts.herokuapp.com](https://isicily-dts.herokuapp.com) -- the app in turn calls Github to get whatever info is needed to satisfy the original DTS request.

We use the [xml2js](https://www.npmjs.com/package/xml2js) to parse the XML TEI files into javascript objects (to extract metadata and in future to build navigation and document references)

# DTS

This implementation implements the entry point, the collections endpoint, and the documents endpoint.  Navigation is in the works.

### Collections endpoint

[The I.Sicily repository](https://github.com/ISicily/ISicily) holds all 4127 inscriptions in a single directory (inscriptions) and so for this proof of concept we chose to include one 'member' entry in the DTS collections document for each epidoc file.  Which makes for a big document.  But more significantly, takes a long time to generate (15 minutes) because we have to parse each an every epidoc file to extract the metadata.  Sooooo, we cached...

#### Caching

The call to the documents endpoint returns a cached file that we preconstruct from all the epidoc files, parsing each individually to extract metadata to go into the member entry.  The documents API call first checks to see if the caches file exists locally - if not, it builds it, saves it then returns it.  If the file does exist, it simply returns it.  

Here is where a Github Action could be useful:  whenever a change is committed to the epidoc files, an action could be triggered to rebuild the cached file.  Simple and very effective.

### Documents endpoint

Simply returns the full document.  Lines and line ranges should be fairly easily supported by parsing the full TEI document and extracting by lb.

### Navigation endpoint

Navigation of the I.Sicily epidoc would likely be mostly by line, although there might be some sectioning.  Still working this out, but at it's simplest, the line citations would be handled by parsing the tei file, and generating references for each line break.

## Paging

Paging could be added, possibly by directly using the Github API paging for certain calls, but more likely by implementing paging over top of certain calls, which shouldn't be overly difficult, although a simple implementation might be a bit inefficient.

## Querying

Might be able to use the Github API queries, otherwise could do some on the fly queries within node.

# TODOS

- Querying

- Paging

- Github actions to rebuild cache

- Navigation endpoint

- Support single line references

- Support line ranges



