


function burger(event) {
  let burger = document.querySelector(".header-burger");
  burger.classList.toggle("toggle");

  const image = event.currentTarget.querySelector('img');
  
  if (burger.classList.contains('toggle')) {
      image.src = "./assets/images/icons/xxx.png";
    } else {
      image.src = "./assets/images/icons/Hamburger_icon.svg.png";
    }

  document.querySelector(".header-navigation").classList.toggle("open");
}



function openModal() {
  document.querySelector(".modal-window").classList.add("open");
}

function closeModal() {
  document.querySelector(".modal-window").classList.remove("open");
}



let accordion = document.getElementsByClassName("accordion");


for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {

    var panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


