const submitButton = document.getElementById("submit");

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
    } else {
        alert("Please Fill Out All The Fields");
    }
});