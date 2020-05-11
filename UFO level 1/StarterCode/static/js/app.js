
// Get the data
var DataAliens = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Assign UFO values for each column
DataAliens.forEach(function(ufo) {

    // Appending tr elements
    var row = tbody.append("tr");

    // Use 'Object.entries' to console.log each UFO value
    Object.entries(ufo).forEach(function([key, value]) {

    // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Creating the filter button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, city, state, shape, duration and comments
    var inputValue = inputElement.property("value");

    // Filter Data with date equal to input value
    var filteredData = DataAliens.filter(sighting => sighting.datetime === inputValue);



    filteredData.forEach(function(selections) {
  
    var row = tbody.append("tr");
   
    Object.entries(selections).forEach(function([key, value]) {

        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});