import data from './data.json'
import './homeStyle.css'
import waffle from './waffle-man.jpg'

function container() {
    const element = document.createElement('div')
    element.setAttribute('id', 'home')
    element.classList.add('homePage')

    const title = document.createElement('h2')
    title.innerText = data.title

    const description = document.createElement('h3')
    description.innerText = data.description

    let flexContainer = document.createElement('div')
    flexContainer.classList.add('flexContainer')

    const waffleMan = new Image();
    waffleMan.src = waffle

    flexContainer.appendChild(waffleMan)

    let schedule = document.createElement('div')
    schedule.classList.add('timeTable')
    data.timings.days.forEach(
        (day,i) => {
           let details = document.createElement('h3')
            details.innerText = `${day}`
            
            let dayTimings = document.createElement('h4')
            dayTimings.innerText = `${data.timings.hours[i]}`

            schedule.appendChild(details)
            schedule.appendChild(dayTimings)
        }
    )
    
    flexContainer.appendChild(schedule)
    
    element.appendChild(title)
    element.appendChild(description)
    element.appendChild(flexContainer)

    return element
}

export default container()