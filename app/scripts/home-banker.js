// ----------------
// Global Variables
// ----------------

const anounBtn = document.getElementById('send-anoun-btn')
const anounInput = document.getElementById('anoun-input')
let anounForm = document.getElementById('f')

// ----------------
// Local Storage
// ----------------

const logoutBtn = document.getElementById('login-btn')

// ----------------
// Functions
// ----------------

function logout() {
    resetLocalStorage()
    window.location.href = './login.html'
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

function sendAnoun() {
    if (anounInput.reportValidity()) { 
        anounForm.reset()
    }
}

// ----------------
// Event Listeners
// ----------------

logoutBtn.addEventListener('click', logout)
anounBtn.addEventListener('click', sendAnoun)
