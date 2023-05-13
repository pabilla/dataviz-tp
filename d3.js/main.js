var dataFromJson = [];
var svg = d3.select("#dataviz_area")
var response = fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    dataFromJson = data;
    drawCircles();
  })
  .catch(error => console.log(error));


function drawCircles(){

    //set the dimensions and margins of the graph
    var margin = {top:10, right:40, bottom:30, left:30};
    var width = 450 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var svg = d3.select("#dataviz_area")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate("+ margin.left +","+margin.top+")")

    var x = d3.scaleLinear()
        .domain([0,100])
        .range([0, width]);

    var y = d3.scaleLinear()
        .domain([0,100])
        .range([height,0]);


    svg
        .selectAll("whatever")
        .data(dataFromJson)
        .enter()
        .append("circle")
        .attr("cx", function(d){return x(d.x)})
        .attr("cy", function(d){return y(d.y)})
        .attr("r", function(d) {return d.value})
        .style("fill", d=> {
            if (d.value >= 10 && d.value < 20) {
                return 'blue';
              } else if (d.value >= 20 && d.value < 30) {
                return 'pink';
              } else if (d.value >= 30 && d.value < 40) {
                return 'green';
              }
        })
        .style("stroke","black");

}













