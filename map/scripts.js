var shape;

var width = 900,
		height = 600;

var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height);

d3.json("america.json", function(error, data) {
	
	var path = d3.geo.path();
	
	svg.append("g")
		.attr("class", "state")
		.selectAll("path")
		.data(topojson.feature(data, data.objects.layer1).features)
		.enter().append("path")
		.attr("d", path);
		
});