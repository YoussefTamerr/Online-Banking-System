const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')

function disable(e) {
    e.disabled = true;
    e.classList.add('no-hover')
}

b1.addEventListener('click', (e) => {
    disable(b1)
    b1.textContent = "Request Accepted";
    b1.style.backgroundColor = "limegreen";
    b2.classList.add('no-hover')
    b2.disabled = false;
})

b2.addEventListener('click', (e) => {
    disable(b2)
    b2.textContent = "Request Denied";
    b2.style.backgroundColor = "red";
    b1.classList.add('no-hover')
    b1.disabled = false;
})

b3.addEventListener('click', (e) => {
    disable(b3)
    b3.textContent = "Request Accepted";
    b3.style.backgroundColor = "limegreen";
    b4.classList.add('no-hover')
    b4.disabled = false;
})

b4.addEventListener('click', (e) => {
    disable(b4)
    b4.textContent = "Request Denied";
    b4.style.backgroundColor = "red";
    b3.classList.add('no-hover')
    b3.disabled = false;
})

b5.addEventListener('click', (e) => {
    disable(b5)
    b5.textContent = "Request Accepted";
    b5.style.backgroundColor = "limegreen";
    b6.classList.add('no-hover')
    b6.disabled = false;
})

b6.addEventListener('click', (e) => {
    disable(b6)
    b6.textContent = "Request Denied";
    b6.style.backgroundColor = "red";
    b5.classList.add('no-hover')
    b5.disabled = false;
})