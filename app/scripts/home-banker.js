// ----------------
// Global Variables
// ----------------
let fname = 'Banker'

// ----------------
// Local Storage
// ----------------

function getName() {
    return localStorage.getItem('fname')
}

let f5 = getName()

if (f5) {
    fname = JSON.parse(f5)
}
const logoutBtn = document.getElementById('login-btn')

// ----------------
// Functions
// ----------------

function resetLocalStorage() {
    localStorage.setItem('email', JSON.stringify(''))
    localStorage.setItem('password', JSON.stringify(''))
}

function logout() {
    resetLocalStorage()
    window.location.href = './login.html'
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

// ----------------
// Event Listeners
// ----------------

logoutBtn.addEventListener('click', logout)
