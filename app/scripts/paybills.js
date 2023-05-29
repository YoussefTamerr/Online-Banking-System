// ----------------
// Global Variables
// ----------------

let incorrectFlag = false

// ----------------
// DOM Elements
// ----------------

const billSpan = document.getElementById('bill')
const preSpan = document.getElementById('pre')
const registerForm = document.getElementById('register-form')
const password = document.getElementById('password-input')
const billType = document.getElementById('bill-type')
const registerBtn = document.getElementById('register-form-btn')
const logoutBtn = document.getElementById('login-btn')

// ----------------
// Local Storage
// ----------------

let bill1 = 100
let bill2 = 150
let bill3 = 200
let bill4 = 2500

let bl1 = localStorage.getItem("bill1")
let bl2 = localStorage.getItem("bill2")
let bl3 = localStorage.getItem("bill3")
let bl4 = localStorage.getItem("bill4")


if (bl1) {
    bill1 = JSON.parse(bl1)
    billSpan.textContent = bill1
} else {
    billSpan.textContent = 100
}
if (bl2) {
    bill2 = JSON.parse(bl2)
}
if (bl3) {
    bill3 = JSON.parse(bl3)
}
if (bl4) {
    bill4 = JSON.parse(bl4)
}

// ----------------
// Functions
// ----------------

function switchFn() {
    switch (billType.value) {
        case 'Gas':
            preSpan.textContent = 'Gas'
            if (bill1 == 0) {
                registerBtn.textContent = "All Bills Paid";
                registerBtn.style.backgroundColor = "limegreen";
                registerBtn.disabled = true;
                registerBtn.classList.add('no-hover')
            } else {
                registerBtn.textContent = "Pay"
                registerBtn.style.backgroundColor = "#007bff"
                registerBtn.disabled = false
                registerBtn.classList.remove('no-hover')
            }
            billSpan.textContent = bill1
            break
        case 'Water':
            preSpan.textContent = 'Water'
            if (bill2 == 0) {
                registerBtn.textContent = "All Bills Paid";
                registerBtn.style.backgroundColor = "limegreen";
                registerBtn.disabled = true;
                registerBtn.classList.add('no-hover')
            } else {
                registerBtn.textContent = "Pay"
                registerBtn.style.backgroundColor = "#007bff"
                registerBtn.disabled = false
                registerBtn.classList.remove('no-hover')
            }
            billSpan.textContent = bill2
            break
        case 'Telephone':
            preSpan.textContent = 'Telephone'
            if (bill3 == 0) {
                registerBtn.textContent = "All Bills Paid";
                registerBtn.style.backgroundColor = "limegreen";
                registerBtn.disabled = true;
                registerBtn.classList.add('no-hover')
            } else {
                registerBtn.textContent = "Pay"
                registerBtn.style.backgroundColor = "#007bff"
                registerBtn.disabled = false
                registerBtn.classList.remove('no-hover')
            }
            billSpan.textContent = bill3
            break
        case 'Electricity':
            preSpan.textContent = 'Electricity'
            if (bill4 == 0) {
                registerBtn.textContent = "All Bills Paid";
                registerBtn.style.backgroundColor = "limegreen";
                registerBtn.disabled = true;
                registerBtn.classList.add('no-hover')
            } else {
                registerBtn.textContent = "Pay"
                registerBtn.style.backgroundColor = "#007bff"
                registerBtn.disabled = false
                registerBtn.classList.remove('no-hover')
            }
            billSpan.textContent = bill4
            break
        default:
            break;
    }
}

function register() {
    if (password.reportValidity() && billType.reportValidity()) {
        if (password.value === 'letmetellyousomething') {
            incorrectFlag = false
            if (document.getElementById('err-msg')) {
                document.getElementById('err-msg').remove()
            }
            switch (billType.value) {
                case 'Gas':
                    bill1 = 0
                    localStorage.setItem('bill1', JSON.stringify(bill1))
                    billSpan.textContent = bill1
                    registerBtn.textContent = "All Bills Paid";
                    registerBtn.style.backgroundColor = "limegreen";
                    registerBtn.disabled = true;
                    registerBtn.classList.add('no-hover')
                    break
                case 'Water':
                    bill2 = 0
                    localStorage.setItem('bill2', JSON.stringify(bill2))
                    billSpan.textContent = bill2
                    registerBtn.textContent = "All Bills Paid";
                    registerBtn.style.backgroundColor = "limegreen";
                    registerBtn.disabled = true;
                    registerBtn.classList.add('no-hover')
                    break
                case 'Telephone':
                    bill3 = 0
                    localStorage.setItem('bill3', JSON.stringify(bill3))
                    billSpan.textContent = bill3
                    registerBtn.textContent = "All Bills Paid";
                    registerBtn.style.backgroundColor = "limegreen";
                    registerBtn.disabled = true;
                    registerBtn.classList.add('no-hover')
                    break
                case 'Electricity':
                    bill4 = 0
                    localStorage.setItem('bill4', JSON.stringify(bill4))
                    billSpan.textContent = bill4
                    registerBtn.textContent = "All Bills Paid";
                    registerBtn.style.backgroundColor = "limegreen";
                    registerBtn.disabled = true;
                    registerBtn.classList.add('no-hover')
                    break
                default:
                    break;
            }
        } else {
            incorrectInfo()
        }
        password.value = ''
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

billType.addEventListener('change', switchFn)

// ----------------
// Function Calls
// ----------------

switchFn()