const start = document.querySelector("#interval-start")
const stop = document.querySelector("#interval-stop")
const div = document.querySelector("#interval-div")
let timer = 0;

let timeOutRecursive = function () {
    let timeOutId = setTimeout(function () {
        if (timer <= 600){
            timer += 60
            div.innerHTML = timer.toString()
            timeOutRecursive()
        }
    }, 60000)
    stop.addEventListener("click", () => {
        clearTimeout(timeOutId);
    })
}

start.addEventListener("click", timeOutRecursive)
