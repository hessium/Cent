let wrapper  = document.querySelector('.wrapper');


let items = document.querySelectorAll('.item');

let btn = document.querySelector('.element__btn');
items.forEach((e) =>{
    e.addEventListener('click' , toggleItem)   
})

function toggleItem(){
    wrapper.classList.toggle('wrapper--active');
}

btn.addEventListener('click' , toggleItem);