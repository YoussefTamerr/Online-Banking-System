const logoutBtn = document.getElementById('login-btn')

function resetLocalStorage() {
    localStorage.setItem('email', JSON.stringify(''))
    localStorage.setItem('password', JSON.stringify(''))
}

function logout() {
    resetLocalStorage()
    window.location.href = './login.html'
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

logoutBtn.addEventListener('click', logout)

const issues = document.querySelectorAll(".issue");

issues.forEach(element => {
    element.querySelector(".mark").addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.hasAttribute("checked")) {
            e.target.removeAttribute("checked");
            e.target.parentNode.style.textDecoration = "none";
            e.target.parentNode.style.color = "#313945";
        } else {
            e.target.setAttribute("checked", "true");
            console.log(e.target.parent)
            e.target.parentNode.style.textDecoration = "line-through";
            e.target.parentNode.style.color = "grey";

        }
    });
});