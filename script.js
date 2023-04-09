let slides = document.querySelector('.slide')

function slideShow() {
    let addition = document.querySelector('.active')
    
    if (addition.nextElementSibling) {
        addition.nextElementSibling.classList.add('active')
        addition.classList.remove('active')
        

    } else {
        slides[0].classList.add('active')
        
    }
    setTimeout('slideShow()', 3000)
}


window.onload = slideShow;