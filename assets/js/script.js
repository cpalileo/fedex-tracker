const trackingFormEl = $("#searchForm");
const trackingListEl = $("#trackingList");

function addTracking(event) {
  event.preventDefault();

  let trackedItem = $("input[name='searchInput']").val();
  let apiData = $("API Data");

  // REGEX for FedEx Tracking Numbers
  //   /(\b96\d{20}\b)|(\b\d{15}\b)|(\b\d{12}\b)/
  //   /\b((98\d\d\d\d\d?\d\d\d\d|98\d\d) ?\d\d\d\d ?\d\d\d\d( ?\d\d\d)?)\b/
  //   /^[0-9]{15}$/

  if (!trackedItem) {
    alert("Please enter a valid tracking number.");
    return;
  }

  let trackingItemEl = $(
    "<li class='flex-row justify-space-between align-center'>"
  );

  let trackingItemData = $(
    "<p class='flex-row justify-space-between align-center'>This is a test</p>"
  );

  trackingItemEl.text(trackedItem);
  trackingItemData.text(apiData);

  trackingItemEl.append(
    "<button class='btn btn-danger btn-small delete-tracking-btn'>Remove</button>"
  );

  trackingListEl.append(trackingItemEl, trackingItemData);

  $("input[name='searchInput']").val("");
  $("API Data");
}

function removeTracking(event) {
  let btnClicked = $(event.target);

  btnClicked.parent("li").remove();
}

trackingFormEl.on("submit", addTracking);
trackingListEl.on("click", ".delete-tracking-btn", removeTracking);
