let myAccount = {
    name: 'John Dinh',
    expenses: 0,
    income: 0,
}

let addExpense = function (account, ammount) {
    account.expenses = account.expenses + ammount
}

// addIncome
let addIncome = function (account, ammount) {
    account.income = account.income + ammount
}

// resetAccount

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

//getAccountSummary
let getAccountSummary = function (account) {
    let name = account.name
    let expenses = account.expenses
    let income = account.income
    let total = income - expenses
    console.log(`Account for ${name} has $${total}, $${income} income, $${expenses} in expenses.`)
}
// Account for John has $900, $1000 income, $100 in expenses.

addExpense(myAccount, 2.50)
addIncome(myAccount, 5000)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)