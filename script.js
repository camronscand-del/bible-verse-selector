// A list of the verse IDs from your HTML file
const verseIds = [
    'anxious-verse',
    'sad-verse',
    'grateful-verse',
    'stressed-verse',
    'peaceful-verse',
    'lonely-verse',
    'angry-verse',
    'hopeful-verse',
    'guilty-verse',
    'fearful-verse',
    'joyful-verse',
    'tired-verse',
    'confused-verse',
    'content-verse',
    'hurt-verse'
];

// Get the random verse button
const randomBtn = document.getElementById('random-verse-btn');

// Add a click event listener to the button
randomBtn.addEventListener('click', (event) => {
    // This stops the page from jumping to a different section
    event.preventDefault(); 
    
    // Hide all verses
    const verseContainers = document.querySelectorAll('.verse-container');
    verseContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Select a random verse ID from the array
    const randomIndex = Math.floor(Math.random() * verseIds.length);
    const randomVerseId = verseIds[randomIndex];
    
    // Show the randomly selected verse
    const randomVerseContainer = document.getElementById(randomVerseId);
    if (randomVerseContainer) {
        randomVerseContainer.style.display = 'block';
    }
});
