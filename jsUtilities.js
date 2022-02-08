function stringToSeconds(timeString){
    let p = timeString.split(':');
    let s = 0, m = 1;

    while(p.length > 0){
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}

function startAndDisplayTimer(){
    let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
}