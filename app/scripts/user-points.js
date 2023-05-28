// ----------------
// Global Variables
// ----------------

const logoutBtn = document.getElementById('login-btn')
const redeemBtn1 = document.getElementById('redeem1')
const redeemBtn2 = document.getElementById('redeem2')
const redeemBtn3 = document.getElementById('redeem3')
const cashBackCard = document.getElementById('remove-card')
const points = document.getElementById('points')

// localStorage.removeItem('cashback')
// localStorage.removeItem('pointsFlag1')
// localStorage.removeItem('pointsFlag2')
// localStorage.setItem('userPoints', JSON.stringify('2367'))

let pnts = localStorage.getItem("userPoints")

if (pnts) {
    points.textContent = JSON.parse(pnts)
    console.log(pnts)
}

// ----------------
// Functions
// ----------------

function logout() {
    window.location.href = './login.html'
    localStorage.setItem('fname', JSON.stringify('Guest'))
}

const redeem = (e) => {
    e.preventDefault();
    switch (e.target.id) {
        case 'redeem1':
            redeemBtn1.textContent = "Offer Redeemed!";
            redeemBtn1.style.backgroundColor = "limegreen";
            redeemBtn1.disabled = true;
            redeemBtn1.classList.add('no-hover')
            localStorage.setItem('cashback', JSON.stringify("used"))
            break;
        case 'redeem2':
            redeemBtn2.textContent = `Voucher Code: NikePsi1120`;
            redeemBtn2.style.backgroundColor = "limegreen";
            redeemBtn2.disabled = true;
            redeemBtn2.classList.add('no-hover')
            break;
        case 'redeem3':
            redeemBtn3.textContent = "Voucher Code: AdidasxPsi2023";
            redeemBtn3.style.backgroundColor = "limegreen";
            redeemBtn3.disabled = true;
            redeemBtn3.classList.add('no-hover')
            break;
        default:
            break;
    }
    return true;
}
  
let isUsed = localStorage.getItem('cashback')
if (isUsed) {
    cashBackCard.remove()
}

// ----------------
// Event Listeners
// ----------------

logoutBtn.addEventListener('click', logout)

redeemBtn1.addEventListener('click', (e) =>  {
    redeem(e)
    setTimeout(function() {
        cashBackCard.remove()
    }, 1000)
    points.textContent -= 200
    localStorage.setItem('userPoints', JSON.stringify(points.textContent))
})
redeemBtn2.addEventListener('click', (e) =>  {
    redeem(e)
    let pointsFlag1 = JSON.parse(localStorage.getItem('pointsFlag1'))
    if (!pointsFlag1) {
        points.textContent -= 700
        localStorage.setItem('pointsFlag1', JSON.stringify('true'))
        localStorage.setItem('userPoints', JSON.stringify(points.textContent))
    }
})
redeemBtn3.addEventListener('click', (e) =>  {
    redeem(e)
    let pointsFlag2 = JSON.parse(localStorage.getItem('pointsFlag2'))
    if (!pointsFlag2) {
        points.textContent -= 700
        localStorage.setItem('pointsFlag2', JSON.stringify('true'))
        localStorage.setItem('userPoints', JSON.stringify(points.textContent))
    }
})
