document.addEventListener("DOMContentLoaded", function () {
  drawChart(
    "#timelineChart",
    "https://raw.githubusercontent.com/tonyyao08/HackRice2020/master/data.json",
    "Chart",
    1, 1589428800000 /* 2020-05-14 */, Date.now(), "57.5%"
  );
  drawChart(
    "#timelineChart1",
    "https://raw.githubusercontent.com/tonyyao08/HackRice2020/master/bigevents.json",
    "Chart1",
    2, 1328418000000 /* 2012 */, 1584936000000, "65%"
  );
});

function drawChart(selector, file_path, chart_id, line_num, date_start, date_end, line_h) {
  const svg = d3
    .select(selector)
    .append("svg")
    .attr("id", chart_id)
    .attr("width", "100%")
    .attr("height", 500);

  d3.json(file_path).then(function (data) {
    svg
      .append("line")
      .attr("class", "timeline-base timeline-base" + line_num)
      .attr("x1", 0)
      .attr("y1", line_h)
      .attr("x2", "100%")
      .attr("y2", line_h);
    
    // Get the value of the svg to for scaleLinear
    function getLineVal(val) {
      if (val === "max") {
        let el = document.getElementById(chart_id);
        return el.getBoundingClientRect().width;
      } else {
        return 0;
      }
    }
    
    // Convert to UNIX timestamp
    function convertToTimeStamp(date) {
      let parts = date.match(/(\d{4})-(\d{2})-(\d{2})/);
      return new Date(parts[1] + "-" + parts[2] + "-" + parts[3]).getTime();
    }

    function createLinks(arr) {
      var output = arr.each(function(index, item) {
        ul.append($(document.createElement('li')).text(item));
      });
      return output;
    }
    
    let scaleLine = d3
      .scaleLinear()
      .domain([date_start, date_end])
      .range([getLineVal("min") + 100, getLineVal("max") - 100]); 

    let scaleCircle = d3
      .scaleLinear()
      .domain([
        moment.duration(3, "d").asMilliseconds(),
        moment.duration(10, "y").asMilliseconds(),
      ])
      .range([10, 200]);

    let allGroups = svg.selectAll("g").data(data);
    let group = allGroups
      .enter()
      .append("g")
      .attr("id", function (data) {
        return "group-" + data.id;
      });

    group

      .append("circle")
      .attr("cx", function (data) {
        return scaleLine(convertToTimeStamp((data.startDate)));
      })
      .attr("cy", line_h)
      .attr("r", function (data) {
        // return Math.random()*30 + 13;
        return 20;
      })
      .attr("fill-opacity", 0.5)
      .attr("class", function (data) {
        return "circle-state circle-" + data.state.toLowerCase();
      })
      .attr("id", function (data) {
        return "circle-" + data.id;
      })
      // When hover a circle
      .on("mouseover", function (d, i) {
        d3.select(this).attr("r", 35);
        d3.select(this).classed("circle-hovered", true);
        d3.select(this.parentNode).selectAll("text").style("opacity", 1)
        d3.select(this.parentNode)
          .selectAll(".text-place")
          .classed("hovered", true)
          .style("opacity", 0);
        d3.select(this.parentNode)
          .selectAll(".text-desc")
          .classed("hovered", true)
          .style("opacity", 0);
        d3.select(this.parentNode)
          .selectAll(".text-date-end")
          .classed("hovered", true)
          .style("opacity", 0);
      })
      // When click a circle
      .on("click", function (d, i) {
        d3.select(this).attr("r", 2000);
        d3.selectAll("line").style("opacity", 0);
        d3.selectAll("circle")
          .filter(function () {
            return !this.classList.contains("circle-hovered");
          })
          .style("opacity", 0);
        d3.select(this).classed("circle-clicked", true);
        d3.select(this.parentNode)
          .selectAll(".text-position")
          .style("opacity", 0);
        d3.select(this.parentNode).selectAll(".text-date").style("opacity", 0);
        d3.selectAll(".details").style("display", "none");
        setTimeout(function () {
          svg.attr("height", 0);
        }, 450);
        let currId = this.getAttribute("id").split("-")[1];
        let details = d3.select("#details-" + currId);
        details.style("display", "block");
        details.style("opacity", 1);
      })
      // When un-hover a circle
      .on("mouseout", function (d, i) {
        // d3.select(this).attr("r", Math.random()*20 + 5);
                d3.select(this).attr("r", 20);
        d3.select(this).classed("circle-hovered", false);
        d3.select(this.parentNode).selectAll("text").style("opacity", 0);
      });

    group
      .append("text")
      .style("opacity", 0)
      .text(function (data) {
        return data.name;
      })
      .attr("x", "20%")
      .attr("y", 160)
      .attr("class", "text-position");

    group
      .append("text")
      .text(function (data) {
        // Get only YYYY-MM
        if (data.startDate.length > 12) {
          return data.startDate.slice(0, 10);
        } else {
          return data.startDate;
        }
      })
      .attr("x", "20%")
      .attr("y", 130)
      .attr("class", "text-date")
      .style("opacity", 0);

    data.map((d) => {
      let details = d3
        .select(selector)
        .append("div")
        .classed("details", true)
        .classed("details-" + d.state.toLowerCase(), true)
        .attr("id", "details-" + d.id);
      details
        .append("i")
        .classed("material-icons close-icon close-icon" + line_num, true)
        .text("close");
      details
        .append("div")
        .classed("title", true)
        .append("span")
        .classed("date text-date date-title", true)
        .text(d.startDate);
      details
        .select(" .title")
        .append("span")
        .classed("position-title text-position", true)
        .text(d.name);
      details
        .append("div")
        .classed("place-name text-place hovered", true)
        .text(d.placeName + ", " + d.state);
      details
        .append("div")
        .attr("class", "text-desc")
        .attr("id", "descriptionId-" + d.id)
        .text(function () {
          if (typeof d.description === "string") {
            return d.description;
          } else {
            return d.description.toString();
          }
        });
      details
        .append("div")
        .attr("class", "text-links")
        .attr("id", "linksId-" + d.id)
        .html("<a href='" + d.links[0] + "'>Source</a>");
      // details.append("div").attr("class", "text-links").attr("id", "linksId" + d.id).text(createLinks(d.links));
      details.style("opacity", 0);
    });

    // Hide the details div (once opened by clicking on circle)
    d3.selectAll(".close-icon" + line_num).on("click", function () {
      d3.select(this.parentNode).style("opacity", 0);
      setTimeout(function () {
        svg.attr("height", 500);
        d3.selectAll(".timeline-base").style("opacity", 1);
        d3.selectAll("circle").classed("circle-clicked", false);
        d3.selectAll("circle").style("opacity", 1);
        d3.selectAll(".details").style("display", "block");
      }, 1000);
    });
  });
}
