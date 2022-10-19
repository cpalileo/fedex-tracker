const trackingFormEl = $("#searchForm");
const trackingListEl = $("#trackingList");

function addTracking(event) {
  event.preventDefault();

  let trackedItem = $("input[name='searchInput']").val();

  if (!trackedItem) {
    alert("Please enter a valid tracking number.");
    return;
  }

  let trackingItemEl = $(
    "<li class='flex-row justify-space-between align-center'>"
  );
  trackingItemEl.text(trackedItem);

  trackingItemEl.append(
    "<button class='btn btn-danger btn-small delete-tracking-btn'>Remove</button>"
  );

  trackingListEl.append(trackingItemEl);

  $("input[name='searchInput']").val("");
}

function removeTracking(event) {
  let btnClicked = $(event.target);

  btnClicked.parent("li").remove();
}

trackingFormEl.on("submit", addTracking);
trackingListEl.on("click", ".delete-tracking-btn", removeTracking);
