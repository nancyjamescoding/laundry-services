
const pricePerKg = 100
let orders = []

let isSelected = 'laundry-order'

class LaundryJob {
    constructor(firstName, lastName, location, email, phone, quantity, totalPrice) {
        this.firstName = firstName
        this.lastName = lastName
        this.location = location
        this.email = email
        this.phone = phone
        this.quantity = quantity
        this.totalPrice = totalPrice
    }
}

function onMenuToggle(menu1, menu2, selected) {
    const menu1StyleBackground = getComputedStyle(document.querySelector(menu1)).backgroundColor
    const menu2StyleBackground = getComputedStyle(document.querySelector(menu2)).backgroundColor
    const menu1StyleColor = getComputedStyle(document.querySelector(menu1)).color
    const menu2StyleColor = getComputedStyle(document.querySelector(menu2)).color
    if (selected != isSelected) {
        document.querySelector(menu1).style.backgroundColor = menu2StyleBackground
        document.querySelector(menu2).style.backgroundColor = menu1StyleBackground
        document.querySelector(menu1).style.color = menu2StyleColor
        document.querySelector(menu2).style.color = menu1StyleColor
        isSelected = selected
    }

    if (selected === 'laundry-order') {
        // console.log('heello')
        document.querySelector('.section3').style.display = 'block'
        document.querySelector('.section4').style.display = 'none'

    } else {
        document.querySelector('.section3').style.display = 'none'
        document.querySelector('.section4').style.display = 'block'
        showLaundryJobs()
        
    }
}
    
function showLaundryJobs() {
    orders.map((item, ind) => {
        
        const parentDiv = document.getElementById('section4')

        const newChildDiv = document.createElement('div')
        newChildDiv.className = 'row jobs-body'

        const nameDiv = document.createElement('div')
        nameDiv.className="col-md-2"
        nameDiv.innerHTML = item.firstName + " " + item.lastName

        const emailDiv = document.createElement('div')
        emailDiv.className="col-md-2"
        emailDiv.innerHTML = item.email

        const phoneDiv = document.createElement('div')
        phoneDiv.className="col-md-2"
        phoneDiv.innerHTML = item.phone

        const locationDiv = document.createElement('div')
        locationDiv.className="col-md-2"
        locationDiv.innerHTML = item.location

        const qtyDiv = document.createElement('div')
        qtyDiv.className="col-md-2"
        qtyDiv.innerHTML = item.quantity

        const priceDiv = document.createElement('div')
        priceDiv.className="col-md-2"
        priceDiv.innerHTML = item.totalPrice

        newChildDiv.appendChild(nameDiv)
        newChildDiv.appendChild(emailDiv)
        newChildDiv.appendChild(phoneDiv)
        newChildDiv.appendChild(locationDiv)
        newChildDiv.appendChild(qtyDiv)
        newChildDiv.appendChild(priceDiv)

        parentDiv.appendChild(newChildDiv)
    })
}

function isValid(firstName, lastName, location, email, phone, quantity) {
    if ((firstName === "") || (lastName === "") || (location === "") || (email ==="" ) || ( phone=== "") || (quantity === "")){
       return false
    } 
    else {
        return true
    }
} 

function processLaundryWork() {
    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const location = document.getElementById("location").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("telephone").value
    const quantity = document.getElementById("quantity").value

    let formIsValid = isValid(firstName, lastName, location, email, phone, quantity)

    if (formIsValid) {
        const totalPrice = quantity * pricePerKg
        const laundryJob = new LaundryJob(firstName, lastName, location, email, phone, quantity, totalPrice)
        orders.push(laundryJob)
        // alert("Your total charge is " + totalPrice)
        document.getElementById("total-price").innerHTML= `${firstName}, Your total charge is ${totalPrice}. Thankyou!`
    } else {
        alert("Enter your details")
    }
}
