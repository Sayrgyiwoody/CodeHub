/*-------Date()-----*/

function updateTime() {

    let date = new Date();
/*-----Variable-----*/

//Time
let hour , minute , second , ampm ;

//Date
let currentDate , month , year , day ;
year = date.getFullYear();
if (date.getDate()>= 10 ) {
    currentDate = date.getDate();
}else {
    currentDate = "0" + date.getDate();
}

/*---------Month and Day Arrays-------*/
month_Array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
day_Array = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
month = month_Array[date.getMonth()];
day = day_Array[date.getDay()];

// nc -> means not calculated
let nc_hour = date.getHours();
let nc_min = date.getMinutes();
let nc_second = date.getSeconds();

//AMPM
ampm = nc_hour >= 12? "PM": "AM";

//hour
if (nc_hour > 12) {
    if (nc_hour >= 22) {
        let realHour = nc_hour - 12;
        hour = realHour;
    }else {
        let realHour = nc_hour - 12;
        hour = "0" + realHour ;
    }   
    } else if (nc_hour === 12) {
        hour = 12
    } else if (nc_hour >= 10){
        hour = nc_hour;
    }else {
        hour = "0" + nc_hour ;
    }

//minute
minute = nc_min >= 10? nc_min : "0" + nc_min;

//second
second = nc_second >= 10? nc_second : "0" + nc_second;

//innerHTML
let newDiv = document.querySelector(".hms");
newDiv.innerHTML = `<p>${hour} : ${minute} : ${second} <span class="clock-secondary">${ampm}</span></p>`;

document.querySelector(".dmy").innerHTML = `<p>${currentDate} , ${month} , ${year} , ${day}</p>`;

}

setInterval(updateTime,1000);