// ----------------
// Global Variables
// ----------------

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
}

// ----------------
// Event Listeners
// ----------------

logoutBtn.addEventListener('click', logout)
