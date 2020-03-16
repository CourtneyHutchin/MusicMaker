window.addEventListener("load", () => {
    // Grab the sounds
    const sounds = document.querySelectorAll(".sound");
    // Grab the divs that hold the sounds
    const pads = document.querySelectorAll(".pads div");
    // Grab the "visual" div
    const visual = document.querySelector(".visual");
    // Create an array to hold the colors
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    // Hold each sound at the specific index
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            // Allows the user to click the same button multiple times
            sounds[index].currentTime = 0;
            // Play the correct sound per [index]
            sounds[index].play();

            createBubbles(index);
        })
    })

    // Create a function that makes bubbles appear
    const createBubbles = index => {
        const bubble = document.createElement("div");
        // Attach "bubble" to the "visual" div
        visual.appendChild(bubble);
        // Change the color
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";

        // Remvove the bubble after it goes off the screen
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        })
    }
})
