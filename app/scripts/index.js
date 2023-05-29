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
    let chk = ''
    if (window.location.href.split('/').pop() === 'home-user.html') {
        chk = document.getElementsByTagName('header')[0].childNodes[3].childNodes[3].childNodes[1]
    }
    if (window.location.href.split('/').pop() !== 'register.html' && window.location.href.split('/').pop() !== 'login.html') {
        if (!chk) {
            chk = document.getElementsByTagName('header')[0].childNodes[3].childNodes[0]
        }
        if (chk) {
            if (chk.tagName === 'BUTTON') {
                const btn = chk
                switch (window.location.href.split('/').pop()) {
                    case 'home.html':
                        btn.textContent = 'Login'
                        break
                    default:
                        btn.textContent = 'Logout'
                        break
                }
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
