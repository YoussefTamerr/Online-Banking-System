// ----------------
// Global Variables
// ----------------

let loggedIn = false

// ----------------
// DOM Elements
// ----------------

const logoDiv = document.getElementById('logo-div')
const footerLogo = document.getElementById('footer-logo')

// ----------------
// Functions
// ----------------

// ----------------
// Event Listeners
// ----------------

logoDiv.addEventListener('click', () => {
    if (window.location.href.split('/').pop() == 'home.html') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        window.location.href = './home.html'
    }
})

footerLogo.addEventListener('click', () => {
    if (window.location.href.split('/').pop() == 'home.html') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        window.location.href = './home.html'
    }
})

// ----------------
// Copyright year
// ----------------

let currentYear = new Date().getFullYear()
let startYr = document.getElementById('starting-year').textContent

if (startYr != currentYear) {
    document.getElementById('current-year').textContent = `-${currentYear}`
}
