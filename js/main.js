const modal = document.getElementById('modal')
const signinLoginBtn = document.getElementById('modal-btn')
const closeModalBtn = document.querySelector('.close')


signinLoginBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);


function openModal(){
    modal.style.display = 'block';
    modal.classList.toggle('fadeIn')
    // signinLoginBtn.removeEventListener('click',openModal);
    
}

function closeModal(){
    modal.style.display = 'none';
    modal.classList.toggle('fadeOut')
    
}

