let money = +prompt("Ваш бюджет на месяц?");
let time = +prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let expenditure = +prompt("Введите обязательную статью расходов в этом месяце");
let consumption = +prompt("Во сколько обойдется?");
obj = {
    expenditure: "consumption"
}

let budgetOneDay = alert("Ваш бюджет на один день " + ((money - consumption) / 30));