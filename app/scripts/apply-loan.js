// ----------------
// Global Variables
// ----------------

// ----------------
// DOM Elements
// ----------------

const registerForm = document.getElementById('register-form')
const phoneNum = document.getElementById('phone')
const loanInput = document.getElementById('loan-input')
const nameInput = document.getElementById('name-input')
const nid = document.getElementById('nid')
const loanAmountInput = document.getElementById('loan-amount-input')
const registerBtn = document.getElementById('register-form-btn')
const logoutBtn = document.getElementById('login-btn')

// ----------------
// Local Storage
// ----------------

// ----------------
// Functions
// ----------------

function register() {
    if (nameInput.reportValidity() && phoneNum.reportValidity() && nid.reportValidity() && loanInput.reportValidity() && loanAmountInput.reportValidity()) {
        registerForm.reset();
        registerBtn.textContent = "Application Submitted";
        registerBtn.style.backgroundColor = "limegreen";
        registerBtn.classList.add('no-hover')
        registerBtn.disabled = true;
    }
}

function logout() {
    window.location.href = './login.html'
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

// ----------------
// Self-Invoking Function
// ----------------

const r = (() => {
    window.intlTelInput(phoneNum, {
        separateDialCode: true,
        preferredCountries: ["eg"],
    })
})()

// ----------------
// Event Listeners
// ----------------

logoutBtn.addEventListener('click', logout)
registerBtn.addEventListener('click', (e) => {
    e.preventDefault()
    register()
})

// ----------------
// Function Calls
// ----------------
