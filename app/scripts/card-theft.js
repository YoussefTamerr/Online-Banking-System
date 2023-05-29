const submitButton = document.getElementById("submit-button");
const logoutBtn = document.getElementById('login-btn')

const submitForm = (e) => {
    e.preventDefault();  
    var cardNumber = document.getElementById("card-number").value;
    var cvv = document.getElementById("cvv").value;
  
    if (cardNumber.length !== 16) {
      alert("Please enter a valid 16-digit credit card number");
      return false;
    }
  
    if (cvv.length !== 3) {
      alert("Please enter a valid 3-digit CVV code");
      return false;
    }
  
    document.getElementById("form").reset();
    submitButton.textContent = "Report Sent Successfully";
    submitButton.style.backgroundColor = "limegreen";
    submitButton.disabled = true;
    registerBtn.classList.add('no-hover')
    return true;
}
  
submitButton.addEventListener("click", submitForm);

function logout() {
  window.location.href = './login.html'
  localStorage.setItem('fname', JSON.stringify('Guest'))
}

logoutBtn.addEventListener('click', logout)
