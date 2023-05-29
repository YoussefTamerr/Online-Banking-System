// ----------------
// Global Variables
// ----------------

// ----------------
// DOM Elements
// ----------------

const registerForm = document.getElementById('register-form')
const emailInput = document.getElementById('email-input')
const registerBtn = document.getElementById('register-form-btn')
const logoutBtn = document.getElementById('login-btn')

// ----------------
// Local Storage
// ----------------

// ----------------
// Functions
// ----------------

function register() {
    if (emailInput.reportValidity()) {
        registerBtn.textContent = "Check Your Email";
        registerBtn.style.backgroundColor = "limegreen";
        registerBtn.classList.add('no-hover')
        registerBtn.disabled = true;
        registerForm.reset();
    }
}

function logout() {
    window.location.href = './login.html'
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

// ----------------
// Self-Invoking Function
// ----------------

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
