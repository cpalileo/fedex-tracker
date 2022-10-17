const searchButton = document.getElementById("searchBtn");
const trackingNumber = document.getElementById("searchInput");
let searchedNumber = "";

searchButton.onclick = function () {
  searchedNumber = trackingNumber.value;
  alert(searchedNumber);
};

//Save to History
