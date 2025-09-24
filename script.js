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

// Get all the verse containers
const verseContainers = document.querySelectorAll('.verse-container');

// Get the dark mode toggle button and body element
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Get all emotion links to add scroll behavior
const emotionLinks = document.querySelectorAll('.emotion-link');

// Event listener for the Random Verse button
randomBtn.addEventListener('click', (event) => {
    // This stops the page from jumping to a different section
    event.preventDefault(); 
    
    // Hide all verses first
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

// New: Dark Mode Toggle Functionality
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button text based on the mode
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
});

// New: Smooth Scroll for Emotion Links
emotionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default jump
        
        // Get the ID from the link's href (e.g., "anxious-verse")
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Hide all verses first (so only the selected one shows)
        verseContainers.forEach(container => {
            container.style.display = 'none';
        });

        // Show the verse container before scrolling to it
        if (targetElement) {
            targetElement.style.display = 'block';

            // Scroll smoothly to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
