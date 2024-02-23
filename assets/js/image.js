const images = [
    { src: './assets/img/universityevent/img8.jpeg'},
    { src: './assets/img/universityevent/img1.jpg'},
    { src: './assets/img/universityevent/img2.jpg'},
    { src: './assets/img/universityevent/img4.jpg'},
    { src: './assets/img/universityevent/img5.jpg'},
    { src: './assets/img/universityevent/img6.jpg'},

    // Add more images here as needed
];

const displayedImage = document.getElementById('displayedImage');
const imageName = document.getElementById('imageName');

let currentIndex = 0;

function displayImage(index) {
    const image = images[index];
    displayedImage.src = image.src;
    imageName.textContent = image.name;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage(currentIndex);
}

// Display the first image initially
displayImage(currentIndex);

// Automatically move to the next image every 3 seconds
setInterval(nextImage, 3000);