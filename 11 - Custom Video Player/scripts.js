//start pause video -- 
//change sound volume -- 
//speed bar --
//skip seconds buttons --
//Progress bar

function setProgress(){

let vidTime = document.getElementById("MainVideo").currentTime
console.log(vidTime)
let progressBar = document.querySelector(".progress__filled")

if(vidTime < 100.500315){
    progressBar.classList.remove("progressBar25")
    progressBar.classList.remove("progressBar75")
    progressBar.classList.remove("progressBar50")
    progressBar.classList.remove("progressBar100")
    progressBar.classList.add("progressBar0")
} else if(vidTime > 100.500315 && vidTime < 280.500315 ){
    progressBar.classList.remove("progressBar0")
    progressBar.classList.remove("progressBar75")
    progressBar.classList.remove("progressBar50")
    progressBar.classList.remove("progressBar100")
    progressBar.classList.add("progressBar25")
} else if(vidTime > 280.500315 && vidTime < 310.500315){
    progressBar.classList.remove("progressBar0")
    progressBar.classList.remove("progressBar75")
    progressBar.classList.remove("progressBar25")
    progressBar.classList.remove("progressBar100")
    progressBar.classList.add("progressBar50")
} else if(vidTime > 310.500315 && vidTime < 446.2504725){
    progressBar.classList.remove("progressBar0")
    progressBar.classList.remove("progressBar50")
    progressBar.classList.remove("progressBar25")
    progressBar.classList.remove("progressBar100")
    progressBar.classList.add("progressBar75")
} else if(vidTime > 590.00063){
    progressBar.classList.remove("progressBar0")
    progressBar.classList.remove("progressBar75")
    progressBar.classList.remove("progressBar25")
    progressBar.classList.remove("progressBar50")
    progressBar.classList.add("progressBar100")
} 
}

function playVid() {
    let videoFile = document.getElementById("MainVideo")
    if (videoFile.paused == true) {
        videoFile.play()
    } else {
        videoFile.pause()
    }
    let progressBar = document.querySelector(".progress__filled")
    let vidTime = document.getElementById("MainVideo").currentTime
    console.log(vidTime) //595.00063
}

function volumeVid() {
    let videoFile = document.getElementById("MainVideo")
    let volumeNumber = document.getElementById("volume").value
    videoFile.volume = volumeNumber
}

function backwards(){
    let vidTime = document.getElementById("MainVideo").currentTime
    document.getElementById("MainVideo").currentTime = (vidTime-10)
}

function forward(){
    let vidTime = document.getElementById("MainVideo").currentTime
    document.getElementById("MainVideo").currentTime = (vidTime+25)
}

function changeRate(){
    let videoFile = document.getElementById("MainVideo")
    let speedRate = document.getElementById("speedRate").value
    videoFile.playbackRate = speedRate
}

window.onload = setProgress()

setInterval(setProgress, 1000)
