function openOverlay() {
    document.getElementsByClassName("overlay")[0].style.height = "100vh";
  }
  
function closeOverlay() {
    document.getElementsByClassName("overlay")[0].style.height = "7em";
    document.getElementsByClassName("overlay-about")[0].style.display = "none";
    document.getElementsByClassName("overlay-arrow")[0].style.display = "none";
    document.getElementsByClassName("navbar")[0].style.display = "flex";
}

function menubarShow(){
    const hiddenDiv = document.getElementById("nvbm");
    const menuIcon = document.getElementsByClassName("menubar-icon")[0];
    if ( hiddenDiv.classList.contains('navbar-menu')) {
        hiddenDiv.classList.remove('navbar-menu');
        hiddenDiv.classList.add('visible');
        document.getElementsByClassName("overlay")[0].style.height = "50em";
        document.getElementsByClassName("site-title")[0].style.borderBottom = "1px solid rgb(99, 95, 95)";
        menuIcon.textContent="expand_less"
    } else {
        hiddenDiv.classList.remove('visible');
        hiddenDiv.classList.add('navbar-menu');
        document.getElementsByClassName("overlay")[0].style.height = "7em";
        document.getElementsByClassName("site-title")[0].style.borderBottom = "none";
        menuIcon.textContent="menu"
    }
}

//Smooth scrolling when redirecting
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.classList.contains('smooth-scroll')) {
        e.preventDefault();
        var targetId = e.target.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const formGroups = document.querySelectorAll(".form-group");
  
    formGroups.forEach((formGroup) => {
      const input = formGroup.querySelector(".form-control");
  
      input.addEventListener("focus", () => {
        formGroup.classList.add("has-focus");
      });
  
      input.addEventListener("blur", () => {
        formGroup.classList.remove("has-focus");
      });
    });
});
  

window.onload = function() {
    /*closeOverlay();*/
    openOverlay();
}
