const timerContainer = document.querySelector("#timer");
const messageContainer = document.querySelector("#timerMessage")

function* sla(time) {
    while (time >= 0) {
        timerContainer.textContent = time;
        yield time;
        yield new Promise(resolve => {
            setTimeout(resolve, 1000);
        });
        time--;
    }
}

const times = {
    "Inspire": 4,
    "Segure": 7,
    "Expire": 8
}

const botao = document.querySelector("#inicioBotao");
botao.addEventListener("click", async (e) => {

    for (let index in times) {
        const timerGenerator = sla(times[index]);
        for (let remainingTime of timerGenerator) {
            if (typeof remainingTime === 'number') {
                // Update the timer display
                timerContainer.textContent = remainingTime ;
                messageContainer.textContent = index
            } else if (remainingTime instanceof Promise) {
                // Wait for 1 second before the next iteration
                await remainingTime;
            }
        }
    }
});
