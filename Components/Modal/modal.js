const modalBox=document.querySelector('#modal-box');
const modalCloseBtn=document.querySelector('#btn-close');
const modalOpenBtn=document.querySelector('#open-modal');

function boxOpen(){
    modalBox.style.display='block';
}
function boxClose(){
    modalBox.style.display='none';
}

modalOpenBtn.addEventListener('click',boxOpen);
modalCloseBtn.addEventListener('click',boxClose);

