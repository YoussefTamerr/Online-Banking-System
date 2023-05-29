// ----------------
// Global Variables
// ----------------

let incorrectFlag = false

// ----------------
// DOM Elements
// ----------------

const billSpan = document.getElementById('bill')
const registerForm = document.getElementById('register-form')
const password = document.getElementById('password-input')
const amountInput = document.getElementById('amount-input')
const registerBtn = document.getElementById('register-form-btn')
const logoutBtn = document.getElementById('login-btn')

// ----------------
// Local Storage
// ----------------

// localStorage.removeItem("bill")

let bill = 9000

let bl = localStorage.getItem("bill")
if (bl) {
    bill = JSON.parse(bl)
    billSpan.textContent = bill
} else {
    billSpan.textContent = 9000
}
amountInput.setAttribute('max', bill)

if (bill == 0) {
    registerBtn.textContent = "All Bills Paid";
    registerBtn.style.backgroundColor = "limegreen";
    registerBtn.disabled = true;
    registerBtn.classList.add('no-hover')
}

// ----------------
// Functions
// ----------------

function register() {
    if (password.reportValidity() && amountInput.reportValidity()) {
        if (bill > 0) {
            if (password.value === 'letmetellyousomething') {
                incorrectFlag = false
                if (document.getElementById('err-msg')) {
                    document.getElementById('err-msg').remove()
                }
                let sub = parseInt(bill) - parseInt(amountInput.value)
                console.log(sub)
                localStorage.setItem('bill', JSON.stringify(sub))
                billSpan.textContent = sub
                bill = sub
                registerForm.reset()
            } else {
                incorrectInfo()
            }
            password.value = ''
        }
    }
}

function incorrectInfo() {
    const err = document.createElement('p')
    err.id = 'err-msg'
    err.textContent = `Incorrect Password.`
    if (!incorrectFlag) {
        insertAfter(document.getElementById('btn-cont'), err)
        incorrectFlag = true
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
