var width = 900,
		height = 600;

data = [2,5,3,4,7,9,10,3,4,5]

var svg = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height);

var yscale = d3.scale.linear()
	.range(0, height)
	.domain([0, 10]);
	
var xscale = d3.scale.linear()
	.range(0, width)
	.domain([0, data.length]);
	
var xAxis = d3.svg.axis()
.orient("bottom")
			.ticks(12, d3.format(",d")),
yAxis = d3.svg.axis()
.orient("left");