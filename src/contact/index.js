import './contactStyle.css'
import data from './data.json'
import location from './restaurant-location.png'

function contact () {
    const element = document.createElement('div')
    element.setAttribute('id', 'contact')
    element.classList.add('contactPage')

    const title = document.createElement('h2')
    title.innerText = data.title

    const number = document.createElement('h3')
    number.innerText = data.number

    const address = document.createElement('h3')
    address.innerText = data.address

    const mapPicture = new Image();
    mapPicture.src = location


    element.appendChild(title)
    element.appendChild(number)
    element.appendChild(address)
    element.appendChild(mapPicture)

    return element
}

export default contact()