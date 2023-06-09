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
    if (emailInput.reportValidity() && passwordInput.reportValidity() && phoneNum.reportValidity() 
    && dateInput.reportValidity() && npid.reportValidity() && nid.reportValidity() && pid.reportValidity() && addressInput.reportValidity() && nameInput.reportValidity()) {
        email = emailInput.value
        fname1 = nameInput.value
        saveItem("fname", fname1)
        if (email.includes('@psi.com')) {
            if (email === "shrek@psi.com") {
                window.location.href = './home-banker.html'
            } else {
                incorrectInfo()
            }
        } else {
            window.location.href = './home-user.html'
        }   
    }
}

function incorrectInfo() {
    const err = document.createElement('p')
    err.id = 'err-msg'
    err.textContent = `"${email}" does not belong to any Psi employees.`
    if (!incorrectFlag) {
        insertAfter(document.getElementById('btn-cont'), err)
        incorrectFlag = true
    }
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

registerBtn.addEventListener('click', (e) => {
    e.preventDefault()
    register()
})

nid.addEventListener('change', () => {
    if (nid.checked) {
        npid.setAttribute('pattern', '[0-9]{14}')
    }
})

pid.addEventListener('change', () => {
    if (pid.checked) {
        npid.removeAttribute('pattern')
    }
})

// ----------------
// Function Calls
// ----------------
