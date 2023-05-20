// ----------------
// Global Variables
// ----------------

let loggedIn = false

// ----------------
// DOM Elements
// ----------------

const main = document.getElementById('main')
const loginBtn = document.getElementById('login-btn')

// ----------------
// Functions
// ----------------

function addField(form, title, type, invalidMsg, placeholder = '') {
    const label = document.createElement('label')
    const input = document.createElement('input')
    const id = title.toLowerCase().replace(/\s+/g, '-');

    label.setAttribute('for', id)
    label.textContent = title

    input.setAttribute('type', type)
    input.setAttribute('oninput', 'setCustomValidity(\'\')')
    input.setAttribute('oninvalid', `this.setCustomValidity(${invalidMsg})`)
    if (type !== 'date') {
        input.setAttribute('placeholder', placeholder)
    }
    if (type === 'tel') {
        input.setAttribute('placeholder', '+201234567890')
    }
    input.required = true;       
    input.id = id
    
    if (type === 'email') {
        input.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
    } else if (type === 'password') {
        input.setAttribute('minlength', 8)
        input.setAttribute('pattern', '^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\\-=[\]{};\':\"\\|,.<>/?]).+$')
    } else if (type === 'text') {
        input.setAttribute('minlength', 3)
        input.setAttribute('maxlength', 64)
    } else if (type === 'tel') {
        input.setAttribute('minlength', 5)
        input.setAttribute('maxlength', 15)
        input.setAttribute('pattern', '^(010|011|012|015)[0-9]{8}$')
    } else if (type === 'date') {
        const today = new Date();
        const maxDate = today.toISOString().slice(0, 10);
        const minDate = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate()).toISOString().slice(0, 10);
        input.setAttribute('min', minDate)
        input.setAttribute('max', maxDate)
    } else if (type === 'radio') {
	input.setAttribute('value', 'national-id')
    }
    form.append(label)
    form.append(input)
}

function createRegisterForm() {
    const form = document.createElement('form')
    const btn = document.createElement('button')

    form.setAttribute('method', 'get')
    form.setAttribute('name', 'registerForm')
    form.setAttribute('action', '#')

    btn.setAttribute('type', 'submit')
    btn.setAttribute('form', 'registerForm')


    addField(form, 'Email', 'email', 'Email should contain \'@\'', 'user@mail.example')
    addField(form, 'Password', 'password', 'Password should contain at least 8 characters including a symbol, at least one lowercase and one uppercase characters and at least one number', '********')
    addField(form, 'Confirm Password', 'password', 'Passwords does not match', '********')
    addField(form, 'Phone Number', 'tel', 'Number should start with +20')
    addField(form, 'Date of Birth', 'date', 'You must be at least 21 years old to register')
    addField(form, 'National ID', 'radio')
    addField(form, 'Passport Number', 'radio')
    addField(form, 'National ID / Passport Number', 'text')

    form.append(btn)
    return form
}

function createLoginForm() {
    const form = document.createElement('form')
    const btn = document.createElement('button')

    form.setAttribute('method', 'get')
    form.setAttribute('name', 'loginForm')
    form.setAttribute('action', '#')

    btn.setAttribute('type', 'submit')
    btn.setAttribute('form', 'registerForm')


    addField(form, 'Email', 'email', 'This field is required', 'user@mail.example')
    addField(form, 'Password', 'password', 'This field is required', '********')

    form.append(btn)
    return form
}

function createForgotPasswordForm() {
    const form = document.createElement('form')
    const btn = document.createElement('button')

    form.setAttribute('method', 'get')
    form.setAttribute('name', 'forgotPassword')
    form.setAttribute('action', '#')

    btn.setAttribute('type', 'submit')
    btn.setAttribute('form', 'forgotPassword')

    addField(form, 'OTP', 'text', 'This field is required', '******')

    form.append(btn)
    return form
}

function populateHome() {
    if (loggedIn) {

    } else {
        
    }
}

// ----------------
// Event Listeners
// ----------------

loginBtn.addEventListener('click', () => {
    
})

// ----------------
// Copyright year
// ----------------

let currentYear = new Date().getFullYear();
let startYr = document.getElementById('starting-year').textContent;

if (startYr != currentYear) {
    document.getElementById('current-year').textContent = `-${currentYear}`;
}
