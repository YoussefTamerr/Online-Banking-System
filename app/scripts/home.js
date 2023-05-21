// ----------------
// Global Variables
// ----------------

// ----------------
// DOM Elements
// ----------------

const loginBtn = document.getElementById('login-btn')
const applyBtn = document.getElementById('apply-btn')
const learnMoreBtn = document.getElementById('learn-more-btn')

// ----------------
// Functions
// ----------------

function populateHome() {
    if (loggedIn) {
    } else {
    }
}

// ----------------
// Event Listeners
// ----------------

loginBtn.addEventListener('click', () => {
    window.location.href = './login.html'
})

applyBtn.addEventListener('click', () => {
    window.location.href = './register.html'
})

learnMoreBtn.addEventListener('click', () => {
    window.location.href = './learn-more.html'
})
