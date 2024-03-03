


// Trying a modal instead of a dropdown image..



function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}


function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}


document.querySelectorAll("[class^='details-button']").forEach(button => {
    button.addEventListener("click", function() {
        var modalId = this.getAttribute("data-modal-target");
        openModal(modalId);
    });
});


document.querySelectorAll(".close-button").forEach(closeButton => {
    closeButton.addEventListener("click", function() {
        this.closest(".modal").style.display = "none";
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};