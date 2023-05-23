// ----------------
// Global Variables
// ----------------

// ----------------
// DOM Elements
// ----------------

const logoDiv = document.getElementById('logo-div')
const footerLogo = document.getElementById('footer-logo')

// ----------------
// Functions
// ----------------

function resetLocalStorage() {
    localStorage.setItem('email', JSON.stringify(''))
    localStorage.setItem('password', JSON.stringify(''))
}

function goHome() {
    let suf = ''
    switch (window.location.href.split('/').pop()) {
        case 'home.html':
            suf = '.html'
        case 'home-user.html':
            suf = '-user.html'
            break
        case 'home-admin.html':
            suf = '-admin.html'
            break
        case 'home-banker.html':
            suf = '-banker.html'
            break
        default:
            break
    }

    if (window.location.href.split('/').pop().includes('home')) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        window.location.href = `./home${suf}`
    }
}

// ----------------
// Event Listeners
// ----------------

logoDiv.addEventListener('click', goHome)
footerLogo.addEventListener('click', goHome)

// ----------------
// Self-Invoking Functions
// ----------------

const c = (() => {
    if (document.getElementsByTagName('header')[0].childNodes[3]) {
        if (document.getElementsByTagName('header')[0].childNodes[3].tagName === 'BUTTON') {
            const btn = document.getElementsByTagName('header')[0].childNodes[3]
            switch (window.location.href.split('/').pop()) {
                case 'home.html':
                    btn.textContent = 'Login'
                    break
                case 'home-user.html':
                    btn.textContent = 'Logout'
                    break
                case 'home-admin.html':
                    btn.textContent = 'Logout'
                    break
                case 'home-banker.html':
                    btn.textContent = 'Logout'
                    break
                default:
                    break
            }
        }
    }
})()

// ----------------
// Copyright year
// ----------------

let currentYear = new Date().getFullYear()
let startYr = document.getElementById('starting-year').textContent

if (startYr != currentYear) {
    document.getElementById('current-year').textContent = `-${currentYear}`
}
