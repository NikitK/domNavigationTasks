'use strict';
let startBtn = document.querySelector("#start"),
    resultTable = document.querySelector(".result-table"),
    resultValue = [],
    expensesItem = document.querySelectorAll(".expenses-item"),
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    allBtn = document.getElementsByTagName("button"),
    chooseIncome = document.querySelector("#income"),
    savingsCheck = document.querySelector("#savings"),
    chooseSum = document.querySelector("#sum"),
    choosePercent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    expensesItemBtn = allBtn[0],
    optionalexpensesBtn = allBtn[1],
    countBudgetBtn = allBtn[2];




[].forEach.call(resultTable.children, function (item, i, arr) {
    if (i % 2 !== 0) {
        resultValue.push(item);
    }
});
//Получение нечетных дочерних елементов блока result-table

let money,
    time,
    budgetValue = resultValue[0],
    daybudgetValue = resultValue[1],
    levelValue = resultValue[2],
    expensesValue = resultValue[3],
    optionalexpensesValue = resultValue[4],
    incomeValue = resultValue[5],
    monthsavingsValue = resultValue[6],
    yearsavingsValue = resultValue[7];

[].forEach.call(allBtn, function (item) {
    if (item !== startBtn) {
        item.setAttribute('disabled', '');
    }
});


startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    [].forEach.call(allBtn, function (item) {
        if (item !== startBtn) {
            item.removeAttribute('disabled');
        }
    });
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();


});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50 && b.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;

        } else {
            console.log("bad result");
            i--;
        }

    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let a = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = a;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {


        appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "High уровень достатка";
        } else {
            levelValue.textContent = "Ошибка";

        }
    } else {
        daybudgetValue.textContent = 'Ошибка!';
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

savingsCheck.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
}

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + " : " + appData[key]);
// }