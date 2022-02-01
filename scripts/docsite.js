const linkItem = document.querySelectorAll('.btn-link');

for(item of linkItem){
    item.addEventListener('click',() =>{
        linkItem.classList.toggle("active");
    })
}
