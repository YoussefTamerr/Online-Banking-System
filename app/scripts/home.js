// ----------------
// Global Variables
// ----------------

let loggedIn = false

// ----------------
// DOM Elements
// ----------------

const loginBtn = document.getElementById('login-btn')
const applyBtn = document.getElementById('apply-btn')
const learnMoreBtn = document.getElementById('learn-more-btn')

// ----------------
// LocalStorage
// ----------------

function saveEmail(x) {
    localStorage.setItem('email', JSON.stringify(x))
    console.log(email)
}

function savePassword(x) {
    localStorage.setItem('password', JSON.stringify(x))
    console.log(password)
}

function getEmail() {
    return localStorage.getItem('email')
}

function getPassword() {
    return localStorage.getItem('password')
}

let f3 = getEmail()
let f4 = getPassword()

if (f3 && f4) {
    loggedIn = true
    email = JSON.parse(f3)
    password = JSON.parse(f4)
}

// ----------------
// Functions
// ----------------

const h = (() => {
    if (loggedIn) {
        if (email === 'shanewalsh@gmail.com') {
            if (password === 'letmetellyousomething') {
                window.location.href = './home-user.html'
            }
        } else if (email === 'admin@psi.com') {
            if (password === 'mudamudamuda') {
                window.location.href = './home-admin.html'
            }
        } else if (email === 'shrek@outlook.com') {
            if (password === 'ieatbabies') {
                window.location.href = './home-banker.html'
            }
        }
    }
})()

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
