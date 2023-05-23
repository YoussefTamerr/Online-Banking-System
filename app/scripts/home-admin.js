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
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

// ----------------
// Event Listeners
// ----------------

logoutBtn.addEventListener('click', logout)
