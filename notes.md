# NICAR 2014
*Baltimore, Maryland*

These are the personal notes of [Lazaro Gamio](https://twitter.com/LazaroGamio). There is a very nice collection of links for NICAR 2014 resources on Chrys Wu's [blog](http://blog.chryswu.com/2014/02/21/nicar14-slides-tutorials-links-tools/).

## Day 1

### Rifling through the mapping toolbox
*Feb. 27 0900*

* Stay flexible with methods

##### Tools & Process

* GDAL: command line, QGIS, Python, TileMill
* PostGIS: SQL, GeoDjango, QGIS, TileMill
* non-spatial > spatial > join > export > publish

##### Geocoding

* geocoding terms of service? rate limit?
* Google Geocoding API
* ArcGis Online geocoding/U.S.A. streets shp
* Oatmeal geocoder (Python) or Ruby Encoder (!)
* Pay attention to precision
* Better to undercount vs overcount

##### More

* Vector: GeoJSON, TopoJSON, D3, Kartograph
* TileMill(!!!)
* TIGER, Natural Earth, Open Street Map
* UTF grid: tiled data?



### NewsCamp:D3
*Feb. 27 1000*

* 'The grammar of graphics' <- Inspired D3
* Edward Tufte *drops mic*
* Chomsky and generative grammar
* expressivity vs efficiency
* Graphics are built from common elements
* Graphics are data-drive documents
* [Miso project](http://misoproject.com/)
* [OpenVis conference](http://openvisconf.com/)
* D3 is not good at: being a chart library, backward compatibility, rendering things for you, abstracting basic graphic primitives.
* D3 is good at: mapping data to documents, general purpose viz library, handling data transformation, basic math and layout transformation.
* D3 is a lot like jQuery
* Tons of examples here: Link coming soon
* Building blocks: Data, transforms, scales, guides, marks

##### Lyra project

* [Lyra project](http://idl.cs.washington.edu/projects/lyra/)
* A GUI for D3?

##### Brief takeaways from training

* D3 methods construct functions that get applied to data


## Day 2

### Holding algorithms accountable
*Feb. 28 0900*

* Good models are imperfect models
* It's impossible to allow for every edge incident
* Examples: Police departments, credit card companies, political campaigns
* Is the algorithm being discriminatory?
* Are they leaving out data?
* Who are algorithms affecting?
* Computers don't have a sense of responsibility. It's humans writing the code.
* Algorithms change very often
* Correlation ≠ Causation (or intent)
* [Discrimination in Online Ad Delivery](http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2208240)
* [A Tale of Two Prices](http://online.wsj.com/news/articles/SB10001424127887323476304578198373572451206?mg=reno64-wsj&url=http%3A%2F%2Fonline.wsj.com%2Farticle%2FSB10001424127887323476304578198373572451206.html) | How Staples prices differently depending on where you live
* Algorithms may have a patent that explains how it works