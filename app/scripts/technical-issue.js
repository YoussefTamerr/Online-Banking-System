const submitButton = document.getElementById("submit");
const logoutBtn = document.getElementById('login-btn')

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let empty = false;
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        if (input.value == "") {
            empty = true;
        }
    })

    if (!empty) {
        const form = submitButton.parentNode;
        form.reset();
        submitButton.textContent = "Report Sent Successfully";
        submitButton.style.backgroundColor = "limegreen";
        submitButton.disabled = true;
        registerBtn.classList.add('no-hover')
    } else {
        alert("Please Fill Out All The Fields");
    }
});

function logout() {
    window.location.href = './login.html'
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

logoutBtn.addEventListener('click', logout)
