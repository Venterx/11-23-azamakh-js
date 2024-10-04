function openModal() {
    const modal = document.querySelector(".modal");
    console.log(modal);
    
    modal.classList.add('open');
    
}

function closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove('open');
}