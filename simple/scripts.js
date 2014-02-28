var width = 600,
		height = 500,
		r = 20,
		data = [10,20,30,60,15,23];

y = d3.scale.linear()
y.domain([0, d3.max(data)])
y.range([0, width])

d3.select("body").append('svg')
	.attr('class', 'chart')

var chart = d3.select(".chart")
	.attr("width", width)
	.attr("height", width);

var circle = chart.selectAll("g")
	.data(data)
	.enter().append("g")

circle.append("circle")
	.attr("cy", function(d) {
		return y(d)
	})
	.attr("cx", function(d,i) {
		return (i * r) +14
	})
	.attr("r", r/2);

// circle.append("text")
// 	.attr("x", x.rangeBand() / 2)
// 	.attr("y", function(d) { return y(d.value) + 3; })
// 	.attr("dy", ".75em")
// 	.text(function(d) { return d.value; });


// var xAxis = d3.svg.axis()
// 		.scale(x)
// 		.orient("bottom");
// 
// chart.append("g")
// 		.attr("class", "x axis")
// 		.attr("transform", "translate(0," + height + ")")
// 		.call(xAxis);
// 
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom");
// 
// chart.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis);