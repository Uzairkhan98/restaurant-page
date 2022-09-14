function container() {
    const element = document.createElement('div')
    element.setAttribute('id', 'menu')
    element.classList.add('menuPage')
    
    const title = document.createElement('h1')
    title.innerText = 'Success!'

    element.appendChild(title)

    return element
}

export default container()