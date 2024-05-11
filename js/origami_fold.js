// Could not get any of this to work properly other than just displaying the image :))))



// // Create a new path once, when the script is executed:
// var numberOfClicks = 0;
// var initialImage = new Raster('https://i.ibb.co/TgtJxQv/Rhino.jpg')
//
//
// initialImage.onLoad = function ()
// {
//
// }
// function displayImage(number)
// {
//
// }
//
// // This function is called whenever the user
// // clicks the mouse in the view:
// function onMouseDown(event) {
//     // Add a segment to the path at the position of the mouse:
//
//
//     numberOfClicks++;
//
// }


const imageUrls = [
    'https://i.ibb.co/TgtJxQv/Rhino.jpg',
    'https://i.ibb.co/BGkgZFx/image0.jpg',
    'https://i.ibb.co/4frXgFG/triple-threat.jpg',
    // Add more images here
];

let raster;
let p = null;
paper.install(window);

// Initialize Paper.js
window.onload = function() {
    p = paper;
    // Get a reference to the canvas object
    const canvas = document.getElementById('interactive_box');
    // Create an empty project and a view for the canvas:
    p.setup(canvas);
    // Create a Paper.js image to raster:
    raster = new paper.Raster({
        source: imageUrls[0], // Load the first image
        position: paper.view.center
    });
    p.view.draw();
}

p.onMouseDown = function(event) {
    console.log('You pressed the mouse!');
    const currentIndex = imageUrls.indexOf(raster.source);
    const nextIndex = (currentIndex + 1) % imageUrls.length;
    raster.source = imageUrls[nextIndex];
    p.view.draw();
}

// function onMouseDown (event) {
//     console.log('You pressed the mouse!');
//     const currentIndex = imageUrls.indexOf(raster.source);
//     const nextIndex = (currentIndex + 1) % imageUrls.length;
//     raster.source = imageUrls[nextIndex];
//     p.view.draw();
// }

// paper.setup('interactive_box');

// // Load images
// const raster = new paper.Raster({
//     source: imageUrls[0], // Load the first image
//     position: paper.view.center
// });

// Function to advance to the next image
// function nextImage() {
//     const currentIndex = imageUrls.indexOf(raster.source);
//     const nextIndex = (currentIndex + 1) % imageUrls.length;
//     raster.source = imageUrls[nextIndex];
// }

// Listen for clicks on the canvas to advance to the next image
// paper.view.onClick = nextImage;