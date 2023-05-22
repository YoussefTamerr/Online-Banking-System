// ----------------
// Global Variables
// ----------------

let incorrectFlag = false
let email = ''
let password = ''
let remember = ''

// ----------------
// DOM Elements
// ----------------

const loginForm = document.getElementById('login-form')
const emailInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password-input')
const rememberInput = document.getElementById('remember-input')
const loginBtn = document.getElementById('login-form-btn')
const showHideIcn = document.getElementById('show-hide-icn')

// ----------------
// LocalStorage
// ----------------

class Storage {
    static saveEmail(x) {
        localStorage.setItem('email', JSON.stringify(x))
        console.log(email)
    }

    static savePassword(x) {
        localStorage.setItem('password', JSON.stringify(x))
        console.log(password)
    }

    static getEmail() {
        return localStorage.getItem('email')
    }

    static getPassword() {
        return localStorage.getItem('password')
    }
}

let f1 = Storage.getEmail()
let f2 = Storage.getPassword()

if (f1) {
    email = JSON.parse(f1)
}

if (f2) {
    password = JSON.parse(f2)
}

// ----------------
// Functions
// ----------------

function login(e) {
    e.preventDefault()

    if (emailInput.reportValidity() && passwordInput.reportValidity()) {
        email = emailInput.value
        password = passwordInput.value
        remember = rememberInput.checked ? true : false

        if (remember) {
            Storage.saveEmail(email)
            Storage.savePassword(password)
        }

        emailInput.value = ''
        passwordInput.value = ''
        if (remember) {
            rememberInput.click()
        }
    }
    if (email === 'shanewalsh@gmail.com') {
        if (password === 'letmetellyousomething') {
            window.location.href = './home-user.html'
        } else {
            incorrectInfo()
        }
    } else if (email === 'admin@psi.com') {
        if (password === 'mudamudamuda') {
            window.location.href = './home-admin.html'
        } else {
            incorrectInfo()
        }
    } else if (email === 'shrek@outlook.com') {
        if (password === 'ieatbabies') {
            window.location.href = './home-banker.html'
        } else {
            incorrectInfo()
        }
    } else {
        incorrectInfo()
    }
}

function togglePassword() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text"
      showHideIcn.setAttribute('alt', 'Password hidden icon')
      showHideIcn.setAttribute('src', '../assets/icons/shown.svg')
    } else {
      passwordInput.type = "password"
      showHideIcn.setAttribute('alt', 'Password shown icon')
      showHideIcn.setAttribute('src', '../assets/icons/hidden.svg')
    }
}

function incorrectInfo() {
    const err = document.createElement('p')
    err.id = 'err-msg'
    err.textContent = 'Email or Password is incorrect'
    if (!incorrectFlag) {
        insertAfter(passwordInput, err)
        incorrectFlag = true
    }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// ----------------
// Event Listeners
// ----------------

loginBtn.addEventListener('click', (e) => {
    login(e)
})

showHideIcn.addEventListener('click', togglePassword)

// ----------------
// Function Calls
// ----------------
