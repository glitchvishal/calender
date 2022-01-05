const date = new Date();

const showCalender =() => {
    const month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

// console.log(lastDay);

const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

const firstDayIndex = date.getDay();
const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

// console.log(lastDayIndex)
const nextDays =7 - lastDayIndex-1;


document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("month").innerHTML = month[date.getMonth()];
document.getElementById("date").innerHTML = date.getMonth()+1;

let days ="";



for(let x = firstDayIndex; x > 0; x--) {
    days +=`<div class ="prev-date">${prevLastDay - x +1}</div>`;
}

for (let i = 1; i<=lastDay; i++) {
    if(i === new Date().getDate()&&date.getMonth() === new Date().getMonth()){
        days += `<div class="today">${i}</div>`
    }else{
        days += `<div>${i}</div>`;
    }
    
    monthDays.innerHTML = days;
}

for(let j = 1; j <= nextDays; j++) {
    days += `<div class ="next-date">${j}</div>`;
    monthDays.innerHTML = days;
}
}



document.querySelector('.prev').addEventListener('click',() => {
    date.setMonth(date.getMonth() - 1);
    showCalender();
});
document.querySelector('.next').addEventListener('click',() => {
    date.setMonth(date.getMonth() + 1);
    showCalender();
});

showCalender();
