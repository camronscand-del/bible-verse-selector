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

// This ensures the script only runs after the page is fully loaded.
document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const randomBtn = document.getElementById('random-verse-btn');
    const verseContainers = document.querySelectorAll('.verse-container');
    const body = document.body;
    const dailyVerseContainer = document.getElementById('verse-of-the-day');
    const themeButtons = document.querySelectorAll('[data-theme]');
    const fontSizeIncreaseBtn = document.getElementById('font-size-increase-btn');
    const fontSizeDecreaseBtn = document.getElementById('font-size-decrease-btn');
    const allVerseParagraphs = document.querySelectorAll('.verse-container p');
    const userNameDisplay = document.getElementById('user-name-display');
    const nameInput = document.getElementById('name-input');
    const bioInput = document.getElementById('bio-input');
    const saveProfileBtn = document.getElementById('save-profile-btn');
    const signoutBtn = document.getElementById('signout-btn');
    
    // Auth-related elements
    const authSection = document.getElementById('auth-section');
    const profileSection = document.getElementById('profile-section');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const loginEmailInput = document.getElementById('login-email-input');
    const loginPasswordInput = document.getElementById('login-password-input');
    const loginBtn = document.getElementById('login-btn');
    const signupEmailInput = document.getElementById('signup-email-input');
    const signupPasswordInput = document.getElementById('signup-password-input');
    const signupBtn = document.getElementById('signup-btn');
    const messageBox = document.getElementById('message-box');

    // New profile management elements
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const changeEmailBtn = document.getElementById('change-email-btn');
    const changePasswordBtn = document.getElementById('change-password-btn');

    // --- State Variables ---
    let userId = null;
    let isAuthReady = false;

    // --- Firebase Auth & Firestore Logic ---
    window.onAuthStateChanged(window.auth, (user) => {
        isAuthReady = true;
        if (user) {
            userId = user.uid;
            console.log("User logged in with ID:", userId);
            authSection.style.display = 'none';
            profileSection.style.display = 'flex';
            loadProfile(userId);
        } else {
            userId = null;
            console.log("No user is logged in.");
            authSection.style.display = 'block';
            profileSection.style.display = 'none';
        }
    });

    const showMessage = (message, isError = false) => {
        messageBox.textContent = message;
        messageBox.style.display = 'block';
        messageBox.style.color = isError ? 'red' : 'green';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 5000);
    };

    const handleLogin = async () => {
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;

        if (!email || !password) {
            showMessage("Please enter both email and password.", true);
            return;
        }
        
        try {
            showMessage("Logging in...", false);
            await window.signInWithEmailAndPassword(window.auth, email, password);
            showMessage("Login successful!", false);
        } catch (error) {
            console.error("Login failed:", error);
            showMessage(`Login failed: ${error.message}`, true);
        }
    };

    const handleSignUp = async () => {
        const email = signupEmailInput.value;
        const password = signupPasswordInput.value;
        
        if (!email || !password) {
            showMessage("Please enter a valid email and password.", true);
            return;
        }

        try {
            showMessage("Creating account...", false);
            await window.createUserWithEmailAndPassword(window.auth, email, password);
            showMessage("Account created successfully! You are now logged in.", false);
        } catch (error) {
            console.error("Sign up failed:", error);
            showMessage(`Sign up failed: ${error.message}`, true);
        }
    };

    const handleSignOut = async () => {
        try {
            await window.signOut(window.auth);
            showMessage("Signed out successfully.", false);
            userNameDisplay.textContent = 'Guest';
            nameInput.value = '';
            bioInput.value = '';
        } catch (error) {
            console.error("Sign out failed:", error);
            showMessage(`Sign out failed: ${error.message}`, true);
        }
    };

    const saveProfile = async () => {
        const user = window.auth.currentUser;
        if (!user) {
            showMessage("You must be logged in to save your profile.", true);
            return;
        }
        const profileData = {
            name: nameInput.value,
            bio: bioInput.value,
        };
        try {
            await window.setDoc(window.getProfileDoc(user.uid), profileData, { merge: true });
            showMessage("Profile saved successfully!", false);
            userNameDisplay.textContent = profileData.name || 'Guest';
        } catch (error) {
            console.error("Error saving profile:", error);
            showMessage(`Error saving profile: ${error.message}`, true);
        }
    };

    const loadProfile = async (id) => {
        if (!id) return;
        try {
            const profileRef = window.getProfileDoc(id);
            const docSnap = await window.getDoc(profileRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                nameInput.value = data.name || '';
                bioInput.value = data.bio || '';
                userNameDisplay.textContent = data.name || 'Guest';
                showMessage("Profile loaded from Firestore.", false);
            } else {
                nameInput.value = '';
                bioInput.value = '';
                userNameDisplay.textContent = 'Guest';
                showMessage("No profile found. Please create one.", true);
            }
        } catch (error) {
            console.error("Error loading profile:", error);
            showMessage(`Error loading profile: ${error.message}`, true);
        }
    };

    const changeEmail = async () => {
        const user = window.auth.currentUser;
        if (!user) {
            showMessage("You must be logged in to change your email.", true);
            return;
        }
        const newEmail = emailInput.value;
        if (!newEmail) {
            showMessage("Please enter a new email.", true);
            return;
        }
        try {
            await window.updateEmail(user, newEmail);
            showMessage("Email updated successfully! You may need to sign in again.", false);
            emailInput.value = '';
        } catch (error) {
            console.error("Error changing email:", error);
            showMessage(`Error changing email: ${error.message}`, true);
        }
    };

    const changePassword = async () => {
        const user = window.auth.currentUser;
        if (!user) {
            showMessage("You must be logged in to change your password.", true);
            return;
        }
        const newPassword = passwordInput.value;
        if (!newPassword || newPassword.length < 6) {
            showMessage("Password must be at least 6 characters long.", true);
            return;
        }
        try {
            await window.updatePassword(user, newPassword);
            showMessage("Password updated successfully!", false);
            passwordInput.value = '';
        } catch (error) {
            console.error("Error changing password:", error);
            showMessage(`Error changing password: ${error.message}`, true);
        }
    };

    // --- General Website Functionality ---
    
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
    if (randomBtn) {
        randomBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const randomIndex = Math.floor(Math.random() * verseIds.length);
            const randomVerseId = verseIds[randomIndex];
            showVerseContainer(randomVerseId);
        });
    }

    // Event listeners for emotion links
    const emotionLinks = document.querySelectorAll('.emotion-link');
    if (emotionLinks) {
        emotionLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const verseId = link.getAttribute('data-verse-id');
                showVerseContainer(verseId);
            });
        });
    }

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
        if (dailyVerseContainer && verseData) {
            dailyVerseContainer.innerHTML = `
                <h3>Verse of the Day</h3>
                <p>"${verseData.text}" - <a href="${verseData.link}" class="citation-link">${verseData.citation}</a> &#10013;</p>
            `;
        } else if (dailyVerseContainer) {
            dailyVerseContainer.innerHTML = `
                <h3>Verse of the Day</h3>
                <p>Error loading verse. Please try again later.</p>
            `;
        }
    }

    // Customizable Themes
    function applyTheme(themeName) {
        if (body) {
            body.setAttribute('data-theme', themeName);
            localStorage.setItem('theme', themeName);
        }
    }

    if (themeButtons) {
        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const theme = button.getAttribute('data-theme');
                applyTheme(theme);
            });
        });
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Font Sizer
    let currentFontSize = parseFloat(localStorage.getItem('fontSize')) || 1.1;

    function updateFontSize() {
        if (allVerseParagraphs) {
            allVerseParagraphs.forEach(p => {
                p.style.fontSize = `${currentFontSize}rem`;
            });
            localStorage.setItem('fontSize', currentFontSize);
        }
    }
    
    if (fontSizeIncreaseBtn) {
        fontSizeIncreaseBtn.addEventListener('click', () => {
            currentFontSize += 0.1;
            updateFontSize();
        });
    }
    
    if (fontSizeDecreaseBtn) {
        fontSizeDecreaseBtn.addEventListener('click', () => {
            currentFontSize = Math.max(0.8, currentFontSize - 0.1);
            updateFontSize();
        });
    }

    // --- Event Listeners for Authentication UI ---
    if (showSignupLink) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', handleSignUp);
    }
    
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', saveProfile);
    }

    if (signoutBtn) {
        signoutBtn.addEventListener('click', handleSignOut);
    }
    
    if (changeEmailBtn) {
        changeEmailBtn.addEventListener('click', changeEmail);
    }

    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', changePassword);
    }

    // Initial calls
    getDailyVerse();
    updateFontSize();

});
