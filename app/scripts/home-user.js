// ----------------
// Global Variables
// ----------------

const logoutBtn = document.getElementById('login-btn')
const openAccount = document.getElementById('btn-1')
const closeAccount = document.getElementById('btn-2')
const applyCCBtn = document.getElementById('btn-3')
const applyLoan = document.getElementById('btn-4')
const viewAccTransactions = document.getElementById('btn-5')
const viewCCTransactions = document.getElementById('btn-6')
const viewCCPoints = document.getElementById('btn-7')
const transferMoney = document.getElementById('btn-8')
const viewCCBill = document.getElementById('btn-9')
const setReminder = document.getElementById('btn-10')
const payBills = document.getElementById('btn-11')
const i1 = document.getElementById('i1')
const i2 = document.getElementById('i2')
const i3 = document.getElementById('i3')

// ----------------
// Functions
// ----------------

const today = new Date().toISOString().substr(0, 10); // get today's date in YYYY-MM-DD format
i2.setAttribute('min', today);

function resetLocalStorage() {
    localStorage.setItem('email', JSON.stringify(''))
    localStorage.setItem('password', JSON.stringify(''))
}

function logout() {
    resetLocalStorage()
    window.location.href = './login.html'
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

function setReminderFn() {
    if (i1.reportValidity() && i2.reportValidity() && i3.reportValidity()) {
        document.getElementById('reminder-form').reset()
    }
}

// ----------------
// Event Listeners
// ----------------

logoutBtn.addEventListener('click', logout)

openAccount.addEventListener('click', () => {
    window.location.href = './open-account.html'
})
closeAccount.addEventListener('click', () => {
    window.location.href = './close-account.html'
})
applyCCBtn.addEventListener('click', () => {
    window.location.href = './apply-credit-card.html'
})
applyLoan.addEventListener('click', () => {
    window.location.href = './apply-loan.html'
})
viewAccTransactions.addEventListener('click', () => {
    window.location.href = './acc-transactions.html'
})
viewCCTransactions.addEventListener('click', () => {
    window.location.href = './cc-transactions.html'
})
viewCCPoints.addEventListener('click', () => {
    window.location.href = './user-points.html'
})
transferMoney.addEventListener('click', () => {
    window.location.href = './transfer-money.html'
})
viewCCBill.addEventListener('click', () => {
    window.location.href = './viewCCBills.html'
})
payBills.addEventListener('click', () => {
    window.location.href = './paybills.html'
})
setReminder.addEventListener('click', () => {
    setReminderFn()
})
