let date = new Date()
let min = date.getMinutes()
let sec = date.getSeconds()
let hour = date.getHours()
let timeLeft = document.querySelector(".display__time-left")
console.log(`${hour}:${min}:${sec}`)

let buttons = document.querySelectorAll(".timer__button")


let minutes = 0
let seconds = 0



for (button of buttons) {
    console.log(button.dataset.time)
    button.addEventListener("click", setTime)
}

function setTime(e) {
    let timOut = e.target.dataset.time
    let timeOut = 0
    if (timOut > 20) {
        timeOut = timOut / 60
    } else {
        timeOut = 20
    }



    console.log(timeOut)

    document.querySelector(".display__time-left").innerHTML = `${timeOut}`

}



//pegar minutes e seconds
//mostrar na interface
//diminuir conforme atualiza


//SHOW WHEN COMES BACK
for (button of buttons) {
    console.log(button.dataset.time)
    button.addEventListener("click", setBack)
}

function setBack(event) {
    console.log(event.target.dataset.time)
    let timOut = event.target.dataset.time
    let timeOut = 0
    if (timOut > 20) {
        timeOut = timOut / 60
    } else {
        timeOut = 0.20
    }

    console.log(timeOut)
    const date = new Date();
    let backHour = date.getHours()
    let backMinutes = date.getMinutes()
    let backSeconds = date.getSeconds()


    if (timeOut == 60) {
        backHour += 1
    } else if (timeOut < 60 && timeOut > 0.20) {
        backMinutes += timeOut
    } else {
        backSeconds += timeOut
    }

    console.log(`Be back at: ${backHour}:${backMinutes}:${backSeconds}`);
    document.querySelector(".display__end-time").innerHTML = `Be back at: ${backHour}:${backMinutes}`
}
//SHOW WHEN COMES BACK