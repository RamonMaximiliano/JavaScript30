let date = new Date()
let min = date.getMinutes()
let sec = date.getSeconds()
let hour = date.getHours()
let timeLeft = document.querySelector(".display__time-left")
console.log(`${hour}:${min}:${sec}`)
let buttons = document.querySelectorAll(".timer__button")
let minutes = 0
let seconds = 0


//diminuir conforme atualiza

for (button of buttons) {
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
    document.querySelector(".display__time-left").innerHTML = `${timeOut}`
}






//SHOW WHEN COMES BACK
for (button of buttons) {
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


    if (timeOut + backMinutes < 60) {
        document.querySelector(".display__end-time").innerHTML = `Be back at: ${backHour}:${timeOut + backMinutes}`
    } else if (timeOut + backMinutes >= 60) {
        let endMin = 0
        if((timeOut + backMinutes) - 60 >= 60){
            backHour +=1
            endMin = (timeOut + backMinutes)%60 
        } else {
            endMin = (timeOut + backMinutes) - 60
        }
        document.querySelector(".display__end-time").innerHTML = `Be back at: ${backHour + 1}:${endMin}`
    }
}
//SHOW WHEN COMES BACK




//PEGANDO DO MANUAL INPUT DE MINUTES  
document.getElementById("custom").addEventListener("submit", manualMin)
function manualMin(event) {
    event.preventDefault()
    const date = new Date();
    let backHour = date.getHours()
    let backMinutes = date.getMinutes()

    let manualValue = Number(document.getElementById("inputManual").value)
/*     if(manualValue > 0){
        window.alert("More than 60 minutes is not allowed!")
    }
 */
    if (manualValue + backMinutes < 60) {
        document.querySelector(".display__end-time").innerHTML = `Be back at: ${backHour}:${manualValue + backMinutes}`
    } else if (manualValue + backMinutes >= 60) {
        let endMin = 0
        if((manualValue + backMinutes) - 60 >= 60){
            backHour +=1
            endMin = (manualValue + backMinutes)%60 
        } else {
            endMin = (manualValue + backMinutes) - 60
        }
        document.querySelector(".display__end-time").innerHTML = `Be back at: ${backHour + 1}:${endMin}`
    }
}
//PEGANDO DO MANUAL INPUT DE MINUTES
