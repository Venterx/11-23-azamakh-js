// function stopButton(time, button) {
//   const originButton = button.innerHTML; 

//   function changeTime() {
//     button.innerHTML = `<span class="counter">${time}</span> ${originButton}`
//     time--;
//   }

//   button.disabled = true;
  
//   changeTime();

//   let timer = setInterval(() => {
//     if (time > 0) {
//       changeTime();
//     } else {
//       localStorage.setItem('modalOpened', 'true');
//       clearInterval(timer);
//       originButton = button.innerHTML;
//       button.disabled = false;
//     }
//   }, 1000);
// }

// function openModal() {
//   let modal = querySelector(".modal");

//   stopButton(10, modal.querySelector(".close-modal"));

//   modal.classList.add("open");
// }

// function closeModal() {
//   document.querySelector(".modal").classList.remove("open");
// }

// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting && !localStorage.getItem('modalOpened')) {
//       openModal();
//     }

//     prevRatio = entry.intersectionRatio;
//   });
// }

// let observer;

// let options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 1,
// };


// observer = new IntersectionObserver(handleIntersect, options);
// observer.observe(document.querySelector('.catalog-nav'));


function blockCloseButton(time, button) {
  const baseButtonInnerHTML = button.innerHTML;

  function changeCounterText() {
    button.innerHTML = `<span class="counter">${time}</span> ${baseButtonInnerHTML}`
    time--;
  }

  button.disabled = true;
  changeCounterText();
  let timer = setInterval(() => {
    if (time > 0) {
      changeCounterText();
    } else {
      localStorage.setItem('modalOpened', 'true');
      clearInterval(timer);
      button.innerHTML = baseButtonInnerHTML;
      button.disabled = false;
    }
  }, 1000);
}

function openModal() {
  const modal = document.querySelector('.modal');
  blockCloseButton(10, modal.querySelector('.close-modal'));

  modal.classList.add('open');
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('open');
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !localStorage.getItem('modalOpened')) {
      openModal();
    }

    prevRatio = entry.intersectionRatio;
  });
}

let observer;

let options = {
  root: null,
  rootMargin: "0px",
  threshold: .3,
};

observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelector('.catalog-inner'));