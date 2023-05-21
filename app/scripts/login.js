// ----------------
// Global Variables
// ----------------

let email = ''
let password = ''

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
    if (emailInput.reportValidity() && passwordInput.reportValidity()) {
        email = emailInput.value
        password = passwordInput.value
        remember = rememberInput.checked ? true : false

        emailInput.value = ''
        passwordInput.value = ''
        rememberInput.click()
    }
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
