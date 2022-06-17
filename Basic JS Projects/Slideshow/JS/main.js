// initializes a ton of arrays

// contains filepaths to the different images used
const pointer = ["images/img_1.jpg", "images/img_2.jpg", "images/img_3.jpg", "images/img_4.jpg"];

// contains the captions used
const info = ["First Caption", "Second Caption", "Third Caption", "Fourth Caption"];

// creates active image array for easy access
const img = document.getElementById("image");

// sets the first image and creates index, which stores the current slide
img.src = pointer[index = 0];

// creates counter, caption, and dot arrays to be used
const counter = document.getElementById("counter");
const caption = document.getElementById("caption");
const dot = document.getElementsByClassName("dot");

// runs overlaySync() to initalize the base state of the slideshow
overlaySync();


// creates functions, which are called by each-other, or index.html

// when called with either a 1 or a -1, calls move() with that value applied to the index
// if the index would go out of range between 0 and 3, it wraps
function stepIndex(direction, num = index+direction) {
    move(3*(num<0)+num*(num>0&&num<4));
}

// updates the counter and caption, and sets the index number dot to active
function overlaySync() {
    counter.innerHTML = `${index + 1}/4`;
    caption.innerHTML = info[index];
    dot[index].className += " active";
}

// sets the current dot to inactive, then sets the index and image to whatever is given
// also calls overlaySync() to update non image components
function move(amount) {
    dot[index].className = "dot";
    img.src = pointer[index = amount];
    overlaySync();
}