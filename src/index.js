import './style.css'
import logo from './wow-logo.png'

document.body.setAttribute('style', 'padding:0px; margin: 0px;')

function content() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content')
    element.classList.add('content')
    
    return element
}

function header() {
    const element = document.createElement('div');
    element.classList.add('header')

    const myLogo = new Image();
    myLogo.src = logo

    element.appendChild(myLogo)

    return element
}

function navBar() {
    const element = document.createElement('div');
    element.classList.add('navBar')

    const pages = ['home', 'menu', 'contact']

    pages.forEach( e => {
        const Page = document.createElement("h2")
        Page.innerText = e
        element.appendChild(Page)
    })

    return element
}

let main = content()

main.appendChild(header())
main.appendChild(navBar())


document.body.appendChild(main)