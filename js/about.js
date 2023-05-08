//ABOUT US CERTIFICATE MODAL
var modal = document.querySelector('.box');
var overlay = document.querySelector('.overlay');
var modalBtn = document.querySelector('.btn-modal');
var yesBtn = document.querySelector('.modal__button--yes');
var closeBtn = document.querySelector('.modal__button--no');

// ---- ---- Open Modal ---- ---- //
modalBtn.addEventListener('click', () => {
    console.log("btn clicked");
    modal.classList.add('active');
});
// ---- ---- Close Modal ---- ---- //
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});
yesBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});
// ---- ---- Close Modal Overlay---- ---- //
overlay.addEventListener('click', () => {
    modal.classList.remove('active');
});
