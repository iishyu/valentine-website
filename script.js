const audio = document.getElementById("background-music");
const toggleButton = document.getElementById("music-toggle");
const icon = toggleButton.querySelector("i");
const yesButton = document.getElementById('yes-button');
const clickSound = document.getElementById('click-sound');
const messageParagraph = document.getElementById('message');
const yippeeSound = new Audio('yippee.mp3');

// Array of random sentences
const sentenceBank = [
    "Really? You don’t want to be my Valentine?",
    "Ouch... that hurts a little.",
    "Wait, what? No love for me?",
    "Oh no, I guess I'm not your type.",
    "Are you sure? I thought we had something special!",
    "That's a bit cold... I thought we had a connection.",
    "You sure? I thought you were the one.",
    "Heartbroken... but I’ll live!",
    "Well, that’s a bummer. I guess I’ll cry alone.",
    "You’re breaking my heart, but I’ll keep going!",
    "Did I do something wrong? Please don’t go!",
    "Why you gotta be like that? I thought we were a match!",
    "I guess I’ll just cry in the corner now.",
    "Please... reconsider! My heart can’t handle this!",
    "I see how it is... no love for me, huh?",
    "I didn’t think you’d say no, but okay...",
    "Not even a little Valentine’s love?",
    "Are you sure you don’t want to make me your Valentine? Really sure?",
];

const soundArray = [
    'no1.mp3', //NOOOO
    'no2.mp3', // jojo
    'no3.mp3', // anime idk
    'no4.mp3',
    'no5.mp3',
    'no6.mp3'
];

const gifBank = [
    `<div class="tenor-gif-embed" data-postid="12820893153488321136" data-share-method="host" data-aspect-ratio="1.5493" data-width="100%">
        <a href="https://tenor.com/view/sad-without-you-gif-12820893153488321136">Sad Without You Sticker</a> from <a href="https://tenor.com/search/sad+without+you-stickers">Sad Without You Stickers</a>
    </div>`,  // Sad Without You Sticker GIF
    `<div class="tenor-gif-embed" data-postid="16299184" data-share-method="host" data-aspect-ratio="1.07383" data-width="100%">
        <a href="https://tenor.com/view/sad-crying-tears-sad-face-cute-gif-16299184">Sad Crying Sticker</a> from <a href="https://tenor.com/search/sad-stickers">Sad Stickers</a>
    </div>`,  // Sad Crying Sticker GIF
    `<div class="tenor-gif-embed" data-postid="10271429305488134245" data-share-method="host" data-aspect-ratio="1.77857" data-width="100%">
        <a href="https://tenor.com/view/anime-gif-10271429305488134245">Anime GIF</a> from <a href="https://tenor.com/search/anime-gifs">Anime GIFs</a>
    </div>`,  // Anime GIF
    `<div class="tenor-gif-embed" data-postid="15774142222256656279" data-share-method="host" data-aspect-ratio="0.907631" data-width="100%">
        <a href="https://tenor.com/view/anime-sad-cry-sorry-remi-ayasaki-gif-15774142222256656279">Anime Sad GIF</a>from <a href="https://tenor.com/search/anime-gifs"></a>
    </div>`,
    `<div class="tenor-gif-embed" data-postid="1148332258033326155" data-share-method="host" data-aspect-ratio="1" data-width="100%">
    <a href="https://tenor.com/view/crying-girl-anime-gif-1148332258033326155">Crying Girl Anime GIF</a> from <a href="https://tenor.com/search/crying+girl-gifs">Crying Girl GIFs</a>
</div>`,  // Crying Girl Anime GIF
`<div class="tenor-gif-embed" data-postid="12629806974360207351" data-share-method="host" data-aspect-ratio="1.76596" data-width="100%">
    <a href="https://tenor.com/view/oshi-no-ko-s2-oshi-no-ko-arima-kana-kana-arima-sad-gif-12629806974360207351">Oshi No Ko S2 Arima Kana GIF</a> from <a href="https://tenor.com/search/oshi+no+ko+s2-gifs">Oshi No Ko S2 GIFs</a>
</div>`,  // Oshi No Ko S2 Arima Kana GIF
`<div class="tenor-gif-embed" data-postid="16937848457580500038" data-share-method="host" data-aspect-ratio="1.81752" data-width="100%">
    <a href="https://tenor.com/view/the-one-piece-is-real-one-piece-is-real-chopper-one-pice-cry-crying-gif-16937848457580500038">The One Piece Is Real Chopper One Piece GIF</a> from <a href="https://tenor.com/search/the+one+piece+is+real-gifs">The One Piece Is Real GIFs</a>
</div>`,  // The One Piece Is Real Chopper One Piece GIF
`<div class="tenor-gif-embed" data-postid="6456996045401281897" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%">
    <a href="https://tenor.com/view/luffy-sad-one-piece-luffy-one-piece-crying-gif-6456996045401281897">Luffy Sad GIF</a> from <a href="https://tenor.com/search/luffy-gifs">Luffy GIFs</a>
</div>`,  // Luffy Sad GIF
`<div class="tenor-gif-embed" data-postid="9399531241085076446" data-share-method="host" data-aspect-ratio="1.24074" data-width="100%">
    <a href="https://tenor.com/view/luffy-breakdown-one-piece-luffy-crying-monkey-d-luffy-anime-gif-9399531241085076446">Luffy Breakdown One Piece GIF</a> from <a href="https://tenor.com/search/luffy+breakdown-gifs">Luffy Breakdown GIFs</a>
</div>`,  // Luffy Breakdown One Piece GIF
`<div class="tenor-gif-embed" data-postid="17024524724070143597" data-share-method="host" data-aspect-ratio="1.0122" data-width="100%">
    <a href="https://tenor.com/view/anime-bocchi-the-rock-kita-ikuyo-sad-hide-gif-17024524724070143597">Anime Bocchi The Rock GIF</a> from <a href="https://tenor.com/search/anime-gifs">Anime GIFs</a>
</div>`,  // Anime Bocchi The Rock GIF
`<div class="tenor-gif-embed" data-postid="9840505378859916279" data-share-method="host" data-aspect-ratio="0.654619" data-width="100%">
    <a href="https://tenor.com/view/anime-bubble-sad-gif-9840505378859916279">Anime Bubble GIF</a> from <a href="https://tenor.com/search/anime-gifs">Anime GIFs</a>
</div>`  // Anime Bubble GIF
];

// Function to load the embed script dynamically
function loadEmbedScript() {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
}

// Function to change the GIF to a random one from the gifBank
function changeGifToRandom() {
    const gifElement = document.querySelector('.tenor-gif-embed');  // Assuming the GIF is in this element
    if (gifElement) {
        const randomGif = gifBank[Math.floor(Math.random() * gifBank.length)];
        gifElement.innerHTML = randomGif;  // Embed the randomly selected GIF

        // After embedding the GIF, load the script to ensure it works
        loadEmbedScript();
    }
}

function getRandomPosition() {
    // Get the visible area of the screen (viewport)
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    // Approximate button dimensions
    const buttonWidth = 100; // Width of the button
    const buttonHeight = 50; // Height of the button

    // Add some padding to keep the button away from the edges
    const padding = 20;

    // Calculate random positions within the visible area
    const randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth - padding * 2)) + padding;
    const randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight - padding * 2)) + padding;

    return { x: randomX, y: randomY };
}
// Function to move the "No" button randomly
function moveNoButton() {
    const noButton = document.querySelector('a[href="no.html"]');
    if (noButton) {
        const newPosition = getRandomPosition();
        noButton.style.position = "absolute";
        noButton.style.left = `${newPosition.x}px`;
        noButton.style.top = `${newPosition.y}px`;
    }
}

// Function to change the "Hello world" text to a random sentence
function changeTextToRandomSentence() {
    const helloWorldText = document.querySelector('p');
    if (helloWorldText) {
        const randomSentence = sentenceBank[Math.floor(Math.random() * sentenceBank.length)];
        helloWorldText.textContent = randomSentence;
    }
}


function playRandomSound() {
    const randomSound = soundArray[Math.floor(Math.random() * soundArray.length)];
    clickSound.src = randomSound;  // Set the source to the random sound
    clickSound.play();  // Play the sound
}

// Add event listener to the "No" button
const noButton = document.querySelector('a[href="no.html"]');
if (noButton) {
    noButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the link from navigating
        moveNoButton();
        changeTextToRandomSentence();  // Change the text
        changeGifToRandom();          // Change the GIF
        playRandomSound();           // Play a random sound
    });
}

// Music toggle functionality
toggleButton.addEventListener("click", () => {


    if (audio.paused) {
        audio.play();
        icon.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        icon.classList.replace("fa-pause", "fa-play");
    }
});










    let gifUpdated = false;  // Flag to check if the GIF has already been updated

yesButton.addEventListener('click', function(event) {
    messageParagraph.textContent = "You're my Valentine, we're getting soft tacos later!";
    
    yippeeSound.currentTime = 0;  // Reset the sound to the beginning
    yippeeSound.play();  // Play the Yippee sound
 
    // Prevent the default action only for the "Yes" button
    event.preventDefault();
    
    // Disable the "Yes" button to prevent it from being clicked again
    yesButton.disabled = true;

    // Change the "Yes" button text to "Yippee!"
    yesButton.textContent = "Yippee!";

    // Change the heading text to "Valentine Achieved!"
    const heading = document.querySelector('h1');
    if (heading) {
        heading.textContent = "Valentine Achieved!";
    }

    // Remove the "No" button
    const noButton = document.querySelector('a[href="no.html"]');
    if (noButton) {
        noButton.remove();
    }

    // Only change the GIF and load the script if it hasn't been updated yet
    if (!gifUpdated) {
        const gifContainer = document.querySelector('.tenor-gif-embed'); // Assuming the GIF is in this element
        if (gifContainer) {
            gifContainer.innerHTML = `
                <div class="tenor-gif-embed" data-postid="16606050094708454978" data-share-method="host" data-aspect-ratio="1.02469" data-width="100%">
                    <a href="https://tenor.com/view/cat-gif-16606050094708454978">Cat Sticker</a> from 
                    <a href="https://tenor.com/search/cat-stickers">Cat Stickers</a>
                </div>
            `;
        }

        // Re-load the embed script to ensure the GIF shows up properly
        const script = document.createElement('script');
        script.src = 'https://tenor.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        gifUpdated = true;  // Set the flag to true after updating the GIF
    }

    // Trigger the confetti effect
    confetti({
        particleCount: 1000,
        spread: 700,
        origin: { y: 0.6 }
    });
});
