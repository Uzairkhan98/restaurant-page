import './style.css'
import logo from './wow-logo.png'
import home from './home/index.js'
import menu from './menu/index.js'


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

const pages = ['home', 'menu', 'contact']

function navBar() {
    const element = document.createElement('div');
    element.classList.add('navBar')


    pages.forEach( (route, i) => {
        const Page = document.createElement("h2")
        Page.innerText = route
        if(i == 0){
            Page.classList.add('active')
        }
        Page.addEventListener("click", () => changeTab(route, i))
        element.appendChild(Page)
    })
    
    return element
}

function changeTab(route, i){
    const Page = document.querySelector('.navBar')
    let lastRoute = 0;
    Page.childNodes.forEach((node, index) => {
        if(node.classList.value =='active'){
            node.classList.remove('active')
            lastRoute = index
        }
        if(index == i)
            node.classList.add('active')
    })

    const main = document.getElementById('content')

    document.getElementById(`${pages[lastRoute]}`).remove()
    const section = route == 'home'? home 
    : route == 'menu' ? menu : contact

    section.classList.add('section')
    main.appendChild(section)
}

let main = content()

main.appendChild(header())
main.appendChild(navBar())
home.classList.add('section')
main.appendChild(home)

document.body.appendChild(main)