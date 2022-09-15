import data from './data.json'
import './homeStyle.css'

function container() {
    const element = document.createElement('div')
    element.setAttribute('id', 'home')
    element.classList.add('homePage')

    const title = document.createElement('h2')
    title.innerText = data.title

    const description = document.createElement('h3')
    description.innerText = data.description

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

    element.appendChild(title)
    element.appendChild(description)
    element.appendChild(schedule)

    return element
}

export default container()