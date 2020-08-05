let slide = document.querySelector('.bg')
let imgSlide = document.querySelector('.img-slide')

let i = 0;
let time = 5000;
let images = [
    'img/home-img.jpeg',
    'img/home-img2.jpeg',
    'img/home-img3.jpeg',
    
]


function changeImg(){
    imgSlide.src = images[i]

    if(i < images.length -1) {
        i++
    }else{
        i = 0
    }

    setTimeout(changeImg, time)
}


slide.onload = changeImg()