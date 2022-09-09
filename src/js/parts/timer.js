function timer () {
    let deadLine = '2022-06-22';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        // hours = Math.floor((t/1000/60/60) % 24),
        // days = Math.floor((t/(1000*60*60*24)))    таймер с отсчетом дней

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }


    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            function addZero(num) {
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            }
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = 0;
                minutes.textContent = 0;
                seconds.textContent = 0;
            }
        }
    }
    setClock('timer', deadLine);
}

module.exports = timer;