let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = null;

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

function startTimer() {
    timer = setInterval(() => {
        count++;
        if (count == 100) {
            count = 0;
            sec++;
            if (sec == 60) {
                sec = 0;
                min++;
                if (min == 60) {
                    min = 0;
                    hr++;
                }
            }
        }
        document.getElementById("hr").innerText = hr.toString().padStart(2, "0");
        document.getElementById("min").innerText = min.toString().padStart(2, "0");
        document.getElementById("sec").innerText = sec.toString().padStart(2, "0");
       document.getElementById("sec").innerText = sec.toString().padStart(2, "0");
        document.getElementById("count").innerText = count.toString().padStart(2, "0");
    }, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerText = "00";
    document.getElementById("min").innerText = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("count").innerText = "00";
}
