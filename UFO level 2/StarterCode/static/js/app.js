
//Get the data
var DataAliens = data;

//Get a reference to the table body
var tbody = d3.select("tbody");

//Assign UFO values for each column
DataAliens.forEach(function(ufo) {

    //Appending tr elements
    var row = tbody.append("tr");

    //Use 'Object.entries' to console.log each UFO value
    Object.entries(ufo).forEach(function([key, value]) {

    //Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
    });
  });


//Creating the filter button
var button = d3.select("#filter-btn");
button.on("click", function() {

  tbody.html("");

  //Select the input date
  var inputElement1 = d3.select("#datetime");
 
  //Select the input city
  var inputElement2 = d3.select("#city");
  //Get the date value
  var inputValue1 = inputElement1.property("value");
  console.log(inputValue1.length);
  //Get the city value
  var inputValue2 = inputElement2.property("value");
  console.log(inputValue2.length);

  //Filter Data with date equal to input value
  if (inputValue1.length == 0 && inputValue2.length == 0){
    var filteredData2 = DataAliens

  };
  if (inputValue1.length == 0 && inputValue2.length != 0){
    var filteredData2 = DataAliens.filter(sighting => sighting.city === inputValue2);
  };
  if (inputValue1.length != 0 && inputValue2.length == 0){
    var filteredData2 = DataAliens.filter(sighting => sighting.datetime === inputValue1);
  };
  if (inputValue1.length != 0 && inputValue2.length != 0){
    var filteredData1 = DataAliens.filter(sighting => sighting.datetime === inputValue1);
    var filteredData2 = filteredData1.filter(sighting => sighting.city === inputValue2);
  };

 
  filteredData2.forEach(function(selections) {
  
    var row = tbody.append("tr");
   
    Object.entries(selections).forEach(function([key, value]) {

      //Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);

    });
});
});