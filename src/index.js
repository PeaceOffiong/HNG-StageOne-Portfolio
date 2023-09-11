document.addEventListener("DOMContentLoaded", function () {
    const timeStamp = document.getElementById("time")
    const day = document.getElementById("day");

    const getTime = () => {
        const date = new Date()
        const index = date.getDay();
        const milliseconds = date.getTime();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const NameofDay = daysOfWeek[index];

        timeStamp.innerHTML = milliseconds;
        day.innerHTML = NameofDay;

    }

    getTime();

    setInterval(getTime, 1000);
});
