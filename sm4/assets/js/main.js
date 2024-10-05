function clearing() {
    const wrapper = document.querySelector('.wrapper');
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
}