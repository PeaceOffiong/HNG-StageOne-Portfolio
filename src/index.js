document.addEventListener("DOMContentLoaded", function () {
    const timeStamp = document.getElementById("date")
    const date = document.getElementById("time");

    const getTime = () => {
        const currentTime = new Date();

        const splits = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        };
        timeStamp.innerHTML = currentTime.toLocaleTimeString(undefined, splits);
        date.innerHTML = currentTime.toDateString();
    }

    getTime();

    setInterval(getTime, 1000);
});
