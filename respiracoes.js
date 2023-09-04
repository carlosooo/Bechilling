



const timerContainer  = document.querySelector("#timer")

let time = 7
timerContainer.textContent = time


function sla(){
    if (time < 1){
        time = 0
        timerContainer.textContent = time

    }else{
 
    timerContainer.textContent = time--
    setTimeout(sla, 1000)
    }

}




