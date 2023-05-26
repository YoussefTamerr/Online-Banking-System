// ----------------
// Global Variables
// ----------------

let fname = 'Banker'

// ----------------
// DOM Elements
// ----------------

const logoDiv = document.getElementById('logo-div')
const footerLogo = document.getElementById('footer-logo')

// ----------------
// Local Storage
// ----------------

function getName() {
    return localStorage.getItem('fname')
}

let f5 = getName()

if (f5) {
    fname = JSON.parse(f5)
}

// ----------------
// Functions
// ----------------

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function resetLocalStorage() {
    localStorage.setItem('email', JSON.stringify(''))
    localStorage.setItem('password', JSON.stringify(''))
}

function goHome() {
    let suf = '.html'
    switch (window.location.href.split('/').pop()) {
        case 'home-user.html':
            suf = '-user.html'
            localStorage.setItem('fname', JSON.stringify('Shane Walsh'))
            break
        case 'home-admin.html':
            suf = '-admin.html'
            localStorage.setItem('fname', JSON.stringify('Admin'))
            break
        case 'home-banker.html':
            suf = '-banker.html'
            localStorage.setItem('fname', JSON.stringify('Shrek'))
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
    const wlc = document.createElement('p')
    wlc.textContent = `Welcome, ${fname}`
    wlc.id = 'wlc'
    if (document.getElementsByTagName('header')[0].childNodes[3].childNodes[0]) {
        if (document.getElementsByTagName('header')[0].childNodes[3].childNodes[0].tagName === 'BUTTON') {
            const btn = document.getElementsByTagName('header')[0].childNodes[3].childNodes[0]
            insertAfter(btn, wlc)
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
