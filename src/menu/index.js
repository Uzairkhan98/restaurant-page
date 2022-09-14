function container() {
    const element = document.createElement('div')
    
    const title = document.createElement('h1')
    title.innerText = 'Success!'

    element.appendChild(title)
    element.setAttribute('id', 'menu')

    return element
}

export default container()