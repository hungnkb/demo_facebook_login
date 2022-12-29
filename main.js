let inputMonthOption = 0;
let getMonth = () => {
    inputMonthOption = +document.getElementById("inputMonth").value;
}

let inputDayOption = document.getElementById("inputDay");
let inputYearOption = document.getElementById("inputYear");


let optionYear = "";
let date = new Date()
for (let i = date.getFullYear(); i >= 1905; i--) {
    optionYear += `<option value="${i}">${i}</option>`;
}

inputYearOption.innerHTML = optionYear;

let optionDay = "";
switch (inputMonthOption) {
    case 1, 3, 5, 7, 8, 10, 12:
        for (let i = 1; i <= 31; i++) {
            optionDay += `<option value="${i}">${i}</option>`
        }
        break;
    case 4, 6, 9, 11:
        for (let i = 1; i <= 30; i++) {
            optionDay += `<option value="${i}">${i}</option>`
        };
        break;
    case 2:
        for (let i = 1; i <= 28; i++) {
            optionDay += `<option value="${i}">${i}</option>`
        }
}

inputDayOption.innerHTML = optionDay;
