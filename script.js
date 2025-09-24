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

// Get the body element to toggle themes
const body = document.body;

// Get all theme buttons
const themeButtons = document.querySelectorAll('[data-theme]');

// Get font size buttons and all verse paragraph elements
const fontSizeIncreaseBtn = document.getElementById('font-size-increase-btn');
const fontSizeDecreaseBtn = document.getElementById('font-size-decrease-btn');
const allVerseParagraphs = document.querySelectorAll('.verse-container p');

// Get profile elements
const userNameDisplay = document.getElementById('user-name-display');
const nameInput = document.getElementById('name-input');
const bioInput = document.getElementById('bio-input');
const saveProfileBtn = document.getElementById('save-profile-btn');

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
    verseContainers.forEach(container => {
        container.style.display = 'none';
    });

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.style.display = 'block';
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listener for the Random Verse button
randomBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * verseIds.length);
    const randomVerseId = verseIds[randomIndex];
    showVerseContainer(randomVerseId);
});

// Event listeners for emotion links
const emotionLinks = document.querySelectorAll('.emotion-link');
emotionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const verseId = link.getAttribute('data-verse-id');
        showVerseContainer(verseId);
    });
});

// Verse of the Day logic
function getDailyVerse() {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('dailyVerseDate');
    let dailyVerseId = localStorage.getItem('dailyVerseId');

    if (!dailyVerseId || storedDate !== today) {
        const randomIndex = Math.floor(Math.random() * verseIds.length);
        dailyVerseId = verseIds[randomIndex];
        localStorage.setItem('dailyVerseDate', today);
        localStorage.setItem('dailyVerseId', dailyVerseId);
    }
    
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

// User Profile (Idea #22)
function saveProfile() {
    const name = nameInput.value;
    const bio = bioInput.value;
    localStorage.setItem('userName', name);
    localStorage.setItem('userBio', bio);
    userNameDisplay.textContent = name || 'Guest';
    // No alert()
}

function loadProfile() {
    const name = localStorage.getItem('userName');
    const bio = localStorage.getItem('userBio');
    if (name) {
        nameInput.value = name;
        userNameDisplay.textContent = name;
    }
    if (bio) {
        bioInput.value = bio;
    }
}

saveProfileBtn.addEventListener('click', saveProfile);
loadProfile();

// Customizable Themes (Idea #37)
function applyTheme(themeName) {
    body.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
}

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        applyTheme(theme);
    });
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

// Font Sizer (Idea #40)
let currentFontSize = parseFloat(localStorage.getItem('fontSize')) || 1.1;

function updateFontSize() {
    allVerseParagraphs.forEach(p => {
        p.style.fontSize = `${currentFontSize}rem`;
    });
    localStorage.setItem('fontSize', currentFontSize);
}

fontSizeIncreaseBtn.addEventListener('click', () => {
    currentFontSize += 0.1;
    updateFontSize();
});

fontSizeDecreaseBtn.addEventListener('click', () => {
    currentFontSize = Math.max(0.8, currentFontSize - 0.1);
    updateFontSize();
});

// Initial load
getDailyVerse();
updateFontSize();
