// ----------------
// Global Variables
// ----------------

const logoutBtn = document.getElementById('login-btn')
const popupNotif = document.getElementById('popup-notif')
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
const viewReminders = document.getElementById('notif')
const payBills = document.getElementById('btn-11')
const i1 = document.getElementById('i1')
const i2 = document.getElementById('i2')
const i3 = document.getElementById('i3')

// ----------------
// Functions
// ----------------

// localStorage.removeItem('reminder')
let rem1 = 'false'
let rem = localStorage.getItem('reminder')
if (rem) {
    rem1 = JSON.parse(rem)
    if (rem1 == 'true') {
        document.getElementById('electricity-reminder').classList.remove('hidden')
    }
}

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
        console.log(i1.value)
        console.log(i2.value)
        console.log(i3.value)
        if (i1.value === 'Electricity Bill' && i3.value == 2500 && i2.value === '2023-06-28') {
            localStorage.setItem('reminder', JSON.stringify('true'))
            document.getElementById('electricity-reminder').classList.remove('hidden')
        }
        document.getElementById('reminder-form').reset()
        setReminder.textContent = "Reminder Set!";
        setReminder.style.backgroundColor = "limegreen";
        setReminder.disabled = true;
        setReminder.classList.add('no-hover')
        setTimeout(function() {
            setReminder.textContent = "Set Reminder";
            setReminder.style.backgroundColor = "#0e4c8c";
            setReminder.disabled = false;
            setReminder.classList.remove('no-hover')
        }, 1000)
    }
}

function viewRemindersFn() {
    popupNotif.classList.toggle('hidden')
}

// ----------------
// Event Listeners
// ----------------

document.body.addEventListener('mousedown', (e) => {
    if (e.target.id !== 'notif') {
        if (!popupNotif.classList.contains('hidden')) {
            popupNotif.classList.add('hidden')
        }
    }
})

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
    window.location.href = './payCCBills.html'
})
payBills.addEventListener('click', () => {
    window.location.href = './paybills.html'
})
setReminder.addEventListener('click', () => {
    setReminderFn()
})
viewReminders.addEventListener('click', () => {
    viewRemindersFn()
})
