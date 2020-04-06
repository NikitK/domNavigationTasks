let startBtn = document.querySelector("#start"),
    resultTable = document.querySelector(".result-table"),
    resultValue = [],
    expensesItem = document.querySelectorAll(".expenses-item"),
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    allBtn = document.getElementsByTagName("button"),
    chooseIncome = document.querySelector("#income"),
    savings = document.querySelector("#savings"),
    chooseSum = document.querySelector("#sum"),
    choosePercent = document.querySelector("#percent"),
    timeDataInput = document.querySelectorAll(".time-data input"),

    expensesItemBtn = allBtn[0],
    optionalexpensesBtn = allBtn[1],
    countBudgetBtn = allBtn[2];





[].forEach.call(resultTable.children, function (item, i, arr) {
    if (i % 2 !== 0) {
        resultValue.push(item);
    }
});
//Получение нечетных дочерних елементов блока result-table

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

// start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
                a != "" && b != "" && a.length < 50 && b.length < 50) {
                console.log("done");
                appData.expenses[a] = b;

            } else {
                console.log("bad result");
                i--;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High уровень достатка");
        } else {
            console.log("Ошибка");

        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i + 1] = a;
        }
    },
    choseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительній доход?(Перечислите через запятую", "");
            if ((typeof (items)) === "string" && (typeof (items)) != null && items != "") {
                appData.income = items.split(", ");
                appData.income.push(prompt("Anything else?"));
                appData.income.sort();
                appData.income.forEach(function (item, i, arr) {
                    let sIndex = i + 1;
                    alert("Способы зарботка:" + sIndex + ":" + item);
                });
            } else {
                console.log("bad result");
                i--;
            }
        }
    }
};

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + " : " + appData[key]);
// }