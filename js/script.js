function digitalClock() {
    var showHours = document.querySelector('.showHours')
    var showTime = document.querySelector('.showTime')

    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    var time = 'AM'

    if (hours == 0) {
        hours = 12
    }

    if (hours > 12) {
        hours -= 12 
        time = 'PM'
    }

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    

    showHours.innerText = `${hours}:${minutes}:${seconds}`
    showTime.innerText = `${time}`
}

function initClock() {
    digitalClock()
    window.setInterval('digitalClock()', 1)
}

initClock()