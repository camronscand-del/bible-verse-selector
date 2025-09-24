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

// Get the verse of the day container
const dailyVerseContainer = document.getElementById('verse-of-the-day');

// All verse content data in a single object for easy access
const allVerses = {
    'anxious-verse': {
        text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
        citation: 'Philippians 4:6',
        link: 'https://www.biblegateway.com/passage/?search=Philippians+4%3A6&version=NIV'
    },
    'sad-verse': {
        text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.',
        citation: 'Psalm 34:18',
        link: 'https://www.biblegateway.com/passage/?search=Psalm+34%3A18&version=NIV'
    },
    'grateful-verse': {
        text: 'Give thanks to the Lord, for he is good; his love endures forever.',
        citation: 'Psalm 107:1',
        link: 'https://www.biblegateway.com/passage/?search=Psalm+107%3A1&version=NIV'
    },
    'stressed-verse': {
        text: 'Come to me, all you who are weary and burdened, and I will give you rest.',
        citation: 'Matthew 11:28',
        link: 'https://www.biblegateway.com/passage/?search=Matthew+11%3A28&version=NIV'
    },
    'peaceful-verse': {
        text: 'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.',
        citation: 'John 16:33',
        link: 'https://www.biblegateway.com/passage/?search=John+16%3A33&version=NIV'
    },
    'lonely-verse': {
        text: 'The Lord is on my side; I will not fear. What can man do to me?',
        citation: 'Psalm 118:6',
        link: 'https://www.biblegateway.com/passage/?search=Psalm+118%3A6&version=NIV'
    },
    'angry-verse': {
        text: 'A gentle answer turns away wrath, but a harsh word stirs up anger.',
        citation: 'Proverbs 15:1',
        link: 'https://www.biblegateway.com/passage/?search=Proverbs+15%3A1&version=NIV'
    },
    'hopeful-verse': {
        text: 'For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.',
        citation: 'Jeremiah 29:11',
        link: 'https://www.biblegateway.com/passage/?search=Jeremiah+29%3A11&version=NIV'
    },
    'guilty-verse': {
        text: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
        citation: '1 John 1:9',
        link: 'https://www.biblegateway.com/passage/?search=1+John+1%3A9&version=NIV'
    },
    'fearful-verse': {
        text: 'Do not be afraid or discouraged, for the Lord your God will be with you wherever you go.',
        citation: 'Joshua 1:9',
        link: 'https://www.biblegateway.com/passage/?search=Joshua+1%3A9&version=NIV'
    },
    'joyful-verse': {
        text: 'Rejoice in the Lord always. I will say it again: Rejoice!',
        citation: 'Philippians 4:4',
        link: 'https://www.biblegateway.com/passage/?search=Philippians+4%3A4&version=NIV'
    },
    'tired-verse': {
        text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
        citation: 'Isaiah 40:31',
        link: 'https://www.biblegateway.com/passage/?search=Isaiah+40%3A31&version=NIV'
    },
    'confused-verse': {
        text: 'For God is not a God of confusion but of peace.',
        citation: '1 Corinthians 14:33',
        link: 'https://www.biblegateway.com/passage/?search=1+Corinthians+14%3A33&version=NIV'
    },
    'content-verse': {
        text: 'I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation.',
        citation: 'Philippians 4:12',
        link: 'https://www.biblegateway.com/passage/?search=Philippians+4%3A12&version=NIV'
    },
    'hurt-verse': {
        text: 'He heals the brokenhearted and binds up their wounds.',
        citation: 'Psalm 147:3',
        link: 'https://www.biblegateway.com/passage/?search=Psalm+147%3A3&version=NIV'
    }
};

/**
 * Shows a specific verse container and hides all others.
 * @param {string} targetId - The ID of the verse container to show.
 */
function showVerseContainer(targetId) {
    // Hide all verses
    verseContainers.forEach(container => {
        container.style.display = 'none';
        container.classList.remove('flipped');
    });

    // Show the target verse and flip the card
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.style.display = 'block';
        setTimeout(() => {
            targetElement.classList.add('flipped');
        }, 100); // Small delay to allow the element to be displayed before flipping
    }
}

// Event listener for the Random Verse button
randomBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    const randomIndex = Math.floor(Math.random() * verseIds.length);
    const randomVerseId = verseIds[randomIndex];
    showVerseContainer(randomVerseId);
});

// Dark Mode Toggle Functionality
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
});

// Smooth Scroll for Emotion Links
emotionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('data-verse-id');
        const targetElement = document.getElementById(targetId);
        
        showVerseContainer(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Verse of the Day logic
function getDailyVerse() {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('dailyVerseDate');
    let dailyVerseId = localStorage.getItem('dailyVerseId');

    // If no verse is stored or the date is different, get a new one
    if (!dailyVerseId || storedDate !== today) {
        const randomIndex = Math.floor(Math.random() * verseIds.length);
        dailyVerseId = verseIds[randomIndex];
        localStorage.setItem('dailyVerseDate', today);
        localStorage.setItem('dailyVerseId', dailyVerseId);
    }
    
    // Get the verse data from the object
    const verseData = allVerses[dailyVerseId];
    if (verseData) {
        dailyVerseContainer.innerHTML = `
            <h3>Verse of the Day</h3>
            <p>"${verseData.text}" - <a href="${verseData.link}" class="citation-link">${verseData.citation}</a> &#10013;</p>
        `;
    } else {
        dailyVerseContainer.innerHTML = `
            <h3>Verse of the Day</h3>
            <p>Error loading verse. Please try again later.</p>
        `;
    }
}

// Call the function on page load to display the daily verse
getDailyVerse();
