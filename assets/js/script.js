const searchButton = document.getElementById("searchBtn");
const trackingNumber = document.getElementById("searchInput");
let searchedNumber = "";

searchButton.onclick = function (event) {
  event.preventDefault();
  searchedNumber = trackingNumber.value;
  localStorage.setItem("searchedNumber", JSON.stringify(searchedNumber));
  console.log("Saved " + searchedNumber);
  //getRequest()
};

//Save to History

//API request

//Display Info
