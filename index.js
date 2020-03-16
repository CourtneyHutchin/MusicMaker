window.addEventListener("load", () => {
    // Grab the sounds
    const sounds = document.querySelectorAll(".sound");
    // Grab the divs that hold the sounds
    const pads = document.querySelectorAll(".pads div");

    // Hold each sound at the specific index
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            // Play the correct per [index] sound
            sounds[index].play();
        })
    })
})
