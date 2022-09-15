import './menuStyle.css'
import {default as data} from "./dataLoader.js"

function container() {
    const element = document.createElement('div')
    element.setAttribute('id', 'menu')
    element.classList.add('menuPage')
    
    const title = document.createElement('h2')
    title.innerText = 'Classic Waffles'

    

    const gridElement = document.createElement('div')
    gridElement.classList.add('menuGrid')

    const waffles = data.map( item => {
        const waffle = document.createElement('div')
        waffle.classList.add('waffle')
        waffle.setAttribute("style", `background-image: url(${item.image});`)

        const waffleTitle = document.createElement('h3')
        waffleTitle.innerText = item.title

        const titleDiv = document.createElement('div')
        titleDiv.classList.add('titleDiv')
        titleDiv.appendChild(waffleTitle)


        waffle.appendChild(titleDiv)
        return waffle
    })

    waffles.forEach(waffle => gridElement.appendChild(waffle))
   
    element.appendChild(title)
    element.appendChild(gridElement)

    return element
}

export default container()