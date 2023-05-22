// ----------------
// Global Variables
// ----------------

// ----------------
// DOM Elements
// ----------------

const emailInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password-input')
const rememberInput = document.getElementById('remember-input')
const loginBtn = document.getElementById('login-form-btn')

// ----------------
// Functions
// ----------------

function login(e) {
    e.preventDefault()

    let email = ''
    let password = ''
    let remember = ''

    if (emailInput.reportValidity() && passwordInput.reportValidity()) {
        email = emailInput.value
        password = passwordInput.value
        remember = rememberInput.checked ? true : false

        emailInput.value = ''
        passwordInput.value = ''
        rememberInput.click()
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

function incorrectInfo() {
    
}

// ----------------
// Event Listeners
// ----------------

loginBtn.addEventListener('click', (e) => {
    login(e)
})

// ----------------
// Function Calls
// ----------------
