let priceAfter = 89914;
let backersAfter = 5007;
let daysAfter = 56;
let packsBacks = [101, 64, 0]

/* MENU MOBILE */
const iconBurguer = document.getElementById("hamburger-icon");
const menuMobile = document.querySelector(".mobile-menu")
const logoMenu = document.getElementById("logo-menu")
const closeMenu = document.getElementById("close-icon-menu")
const logoNav = document.getElementById("logo-nav")
/* DISABLE CARD MAIN SCREEN */
const numLefts = document.querySelectorAll('article .price-left')//NUMB LEFT
const cards = document.querySelectorAll("article.card")//CARD
const btnCard = document.querySelectorAll("article div button")
/* CHANGE VALUES */
const moneyCollect = document.querySelector("#discover :nth-child(1)")
const backers = document.querySelector("#discover :nth-child(3)")
const daysLeft = document.querySelector("#discover :nth-child(5)")
const barra = document.querySelector("#barra")
/* REWARD PACK */
const btnBack = document.getElementById("btn-back")
const backThisProject = document.querySelector(".container-reward");
const close = document.getElementById("icon-close")
/* BOOKMARKED */
const bookGray = document.querySelector(".book-gray")
const bookCyan = document.querySelector(".book-cyan")
const bookmarkText = document.querySelector(".book-cyan+p")
/* DISABLE MENU BACK THIS PROJECT */
const numLeftsBack = document.querySelectorAll('form .card .price-left')//NUMB LEFT
const cardsBack = document.querySelectorAll("form .card")//CARD
/* MAIN SCREENS */
const thanks = document.querySelector(".container-screen-thanks")
const radioForm = document.querySelectorAll(".input-form")
const enterPledge = document.querySelectorAll('.enter-your-pledge')
const form = document.getElementById("form-card")
const valueInput = document.querySelectorAll(".dollar+ input")

const goIt = document.getElementById("got-it")

setValue()
disableCard()
updateBarra()
/* MENU MOBILE */
iconBurguer.addEventListener("click", () => {
    menuMobile.classList.remove("display")
    logoNav.style.visibility = "hidden"
    iconBurguer.style.visibility = "hidden"
})
closeMenu.addEventListener('click', () => {
    menuMobile.classList.add("display")
    logoNav.style.visibility = "visible"
    iconBurguer.style.visibility = "visible"
})

/* DISABLE CARD MAIN SCREEN */
function disableCard() {
    numLefts.forEach((item, index) => {
        if (item.firstChild.data == "0") {
            cards[index].classList.add("disable")
            btnCard[index].style.background = "hsl(0, 0%, 48%)"
            btnCard[index].disabled = true
        }
    })
    numLeftsBack.forEach((item, index) => {
        if (item.firstChild.data == "0") {
            cardsBack[index + 1].classList.add("disable")
            radioForm[index + 1].disabled = true
        }
    })
}
/* SET VALUES */
function setValue() {
    moneyCollect.innerHTML = `$${styleValue(priceAfter)}<span>of $100,000 backed</span>`
    for (let i = 0; i < packsBacks.length; i++) {
        numLeftsBack[i].innerHTML = `${packsBacks[i]}<span> left</span>`
        numLefts[i].innerHTML = `${packsBacks[i]}<span> left</span>`
    }
}

/* SELECT REWARD */
btnCard.forEach((item, index) => {
    item.addEventListener("click", () => {
        backThisProject.classList.toggle("display")
        radioForm[index + 1].checked = true
        enterPledge[index + 1].classList.remove("display")
    })
})

/* CHANGE VALUES */
function changeValue(valInput) {
    priceAfter = priceAfter + valInput;
    backersAfter++
}
function styleValue(value) {
    return value.toString().substring(0, value.toString().length - 3) + "," + value.toString().substring(value.toString().length - 3);
}
function updateBarra() {
    if (priceAfter > 100000) {
        barra.style.width = "100%"
    } else {
        barra.style.width = `${priceAfter / 1000}%`
    }
}


/* REWARD PACK */
btnBack.addEventListener("click", () => {
    backThisProject.classList.toggle("display")
})
close.addEventListener("click", () => {
    resetEnterPledge();
    resetChecked();
    backThisProject.classList.toggle("display")
})

for (let i = 0; i < radioForm.length; i++) {
    radioForm[i].addEventListener("click", () => {
        resetEnterPledge()
        enterPledge[i].classList.remove("display")
    })
}
form.addEventListener('submit', (e) => {

    e.preventDefault();

    thanks.classList.remove("display")
    backThisProject.classList.add("display")
    radioForm.forEach((item, index) => {
        if (item.checked) {
            packsBacks[index - 1]--;
            changeValue(parseInt(valueInput[index].value))
            if (index > 0) {
                numLeftsBack[index - 1].innerHTML = `${packsBacks[index - 1]}<span> left</span>`
                numLefts[index - 1].innerHTML = `${packsBacks[index - 1]}<span> left</span>`
            }
        }
    })
    moneyCollect.innerHTML = `$${styleValue(priceAfter)}<span>of $100,000 backed</span>`
    backers.innerHTML = `${styleValue(backersAfter)}<span>total backers</span>`
    updateBarra();
    disableCard()
})
goIt.addEventListener("click", () => {
    resetEnterPledge();
    resetChecked();
    thanks.classList.add("display")
    backThisProject.classList.add("display")
})
function resetChecked() {
    radioForm.forEach(item => {
        item.checked = false
    })
}
function resetEnterPledge() {
    enterPledge.forEach(item => {
        item.classList.add("display")
    })
}
/* BOOKMARKED */

bookGray.addEventListener("click", () => {
    bookGray.classList.add("display")
    bookCyan.classList.remove("display")
    bookmarkText.style.color = "hsl(176, 72%, 28%)"
})
bookCyan.addEventListener("click", () => {
    bookCyan.classList.add("display")
    bookGray.classList.remove("display")
    bookmarkText.style.color = "hsl(0, 0%, 48%)"
})



