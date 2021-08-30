export class Contador {

    constructor() {
        this.duration = 5
        this.display = document.querySelector('.timer')    
    }

    contadorRegressivo() {
        let timer = this.duration, minutes, seconds

        setInterval(() => {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10)

            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            this.display.textContent = `${minutes}:${seconds}`

            if(--timer == 0) {
                window.location.href ='./index.html'
            }
        }, 1000);
    }
}