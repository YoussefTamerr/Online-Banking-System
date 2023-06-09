// ----------------
// Global Variables
// ----------------

let incorrectFlag = false

// ----------------
// DOM Elements
// ----------------

const registerForm = document.getElementById('register-form')
const password = document.getElementById('password-input')
const job = document.getElementById('job-input')
const accountT = document.getElementById('account-type')
const registerBtn = document.getElementById('register-form-btn')
const logoutBtn = document.getElementById('login-btn')

// ----------------
// Local Storage
// ----------------

// ----------------
// Functions
// ----------------

function register() {
    if (password.reportValidity() && job.reportValidity() && accountT.reportValidity()) {
        if (password.value === 'letmetellyousomething') {
            registerBtn.textContent = "Application Submitted";
            registerBtn.style.backgroundColor = "limegreen";
            registerBtn.classList.add('no-hover')
            registerBtn.disabled = true;
            incorrectFlag = false
            if (document.getElementById('err-msg')) {
                document.getElementById('err-msg').remove()
            }
            registerForm.reset();
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

// ----------------
// Function Calls
// ----------------
