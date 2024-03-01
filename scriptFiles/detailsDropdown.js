




// detailsDropdown.js :


document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.details-button'); 
    if (button) {
        button.addEventListener('click', function() {
            toggleImage();
        });
    }
});

function toggleImage() {
    var imgSrc = "/Images/stickynoteDropdown.png";
    var placeholder = document.getElementById("image-placeholder");
    
    var img = placeholder.querySelector("img");
    if (img) {
    
        img.style.display = img.style.display === 'none' ? '' : 'none';
    } else {
        
        img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Dropdown Sticky Note";
        img.style.display = ''; 
        img.className = 'dropdown-image';
        placeholder.appendChild(img);
    }
}
