var width = 600,
		height = 500,
		margin = 30
		data = [
			{'name' : 'bob1' , 'value' : 5},
			{'name' : 'bob2' , 'value' : 12},
			{'name' : 'bob3' , 'value' : 20},
			{'name' : 'bob4' , 'value' : 7},
			{'name' : 'bob5' , 'value' : 4}
			];

var x = d3.scale.ordinal()
	.rangeRoundBands([0, (width-margin)], .1);

var y = d3.scale.linear()
	.range([(height-margin), 0]);

d3.select("body").append('svg')
	.attr('class', 'chart')

var chart = d3.select(".chart")
	.attr("width", width-margin)
	.attr("height", width-margin);

x.domain(data.map(function(d) { return d.name; }));
y.domain([0, d3.max(data, function(d) { return d.value; })]);

var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d) { return "translate(" + x(d.name) + ",0)"; });

bar.append("rect")
	.attr("y", function(d) { return y(d.value); })
	.attr("height", function(d) { return height - y(d.value); })
	.attr("width", x.rangeBand());

bar.append("text")
	.attr("x", x.rangeBand() / 2)
	.attr("y", function(d) { return y(d.value) + 3; })
	.attr("dy", ".75em")
	.text(function(d) { return d.value; });


function type(d) {
		d.value = +d.value; // coerce to number
		return d;
}

var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

chart.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
