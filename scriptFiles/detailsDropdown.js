


// Trying a modal instead of a dropdown image..

// detailsDropdown.js :

var modal = document.getElementById("modal");
var btn = document.querySelector(".details-button");
var span = document.getElementsByClassName("close-button")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
