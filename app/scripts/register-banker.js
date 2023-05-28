// ----------------
// Global Variables
// ----------------

let incorrectFlag = false
let email = ''
let fname1 = ''

// ----------------
// DOM Elements
// ----------------

const registerForm = document.getElementById('register-form')
const emailInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password-input')
const phoneNum = document.getElementById('phone')
const dateInput = document.getElementById('date-of-birth')
const addressInput = document.getElementById('address-input')
const nameInput = document.getElementById('name-input')
const nid = document.getElementById('nid')
const pid = document.getElementById('pid')
const npid = document.getElementById('nid-pid')
const registerBtn = document.getElementById('register-form-btn')
const hint = document.getElementById('hint')
const logoutBtn = document.getElementById('login-btn')

// ----------------
// Local Storage
// ----------------

function saveItem(x,y) {
    localStorage.setItem(`${x}`, JSON.stringify(y))
}

// ----------------
// Functions
// ----------------

function register() {
    if (nameInput.reportValidity() && emailInput.reportValidity() && passwordInput.reportValidity() && phoneNum.reportValidity() 
    && addressInput.reportValidity() && dateInput.reportValidity()) {
        registerForm.reset()
        registerBtn.textContent = "Banker Registered Successfully"
        registerBtn.style.backgroundColor = "limegreen"
        registerBtn.classList.add('no-hover')

        registerBtn.disabled = true;
    }
}

function logout() {
    window.location.href = './login.html'
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// ----------------
// Self-Invoking Function
// ----------------

const r = (() => {
    window.intlTelInput(phoneNum, {
        separateDialCode: true,
        preferredCountries: ["eg"],
    })
    const today = new Date()
    const minAge = new Date(
        today.getFullYear() - 21,
        today.getMonth(),
        today.getDate()
    )
        .toISOString()
        .slice(0, 10)
    dateInput.setAttribute('max', minAge)

})()

// ----------------
// Event Listeners
// ----------------

logoutBtn.addEventListener('click', logout)
registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    register();
})

// ----------------
// Function Calls
// ----------------
