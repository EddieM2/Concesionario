//Define the images

const images = [
    'img/camaro1.jpg',
    'img/camaro2.jpg',
    'img/camaro3.jpg',
];

// app state
let index = 0;
const max = images.length;

//get the DOM elements
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

// listen for arrow click events

prevSlideButton.addEventListener('click', function() {
    index--;
    setImageIndex()
    changeBackgroundImage(images[index], containerElement);

});

nextSlideButton.addEventListener('click', function() {
    index++;
    setImageIndex()
    changeBackgroundImage(images[index], containerElement);

});

// utility funtions

function setImageIndex() {
    if (index < 0) index = max - 1;
    if (index == max) index = 0;
};


function changeBackgroundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`;
};


