let start = document.querySelector("#start"),
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





    [].forEach.call(resultTable.children, function(item, i, arr){
     if (i % 2 !== 0){
        resultValue.push(item);
     }
    });
    //Получение нечетных дочерних елементов блока result-table
  console.log(timeDataInput);