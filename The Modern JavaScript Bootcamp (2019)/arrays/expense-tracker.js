const account = {
    firstName: 'John',
    lastName: 'Dinh',

    expenses: [],
    incomes: [],

    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    addExpense: function (description, ammount) {
        this.expenses.push({
            description: description,
            ammount: ammount,
        });
    },

    addIncome: function (description, ammount) {
        this.incomes.push({
            description: description,
            ammount: ammount,
        });
    },

    getAccountSummary: function () {

        let expenseTotal = 0;
        let incomeTotal = 0;

        this.incomes.forEach(income => {
            incomeTotal += income.ammount;
        });

        this.expenses.forEach( expense => {
            expenseTotal += expense.ammount;
        });

        let balance = incomeTotal - expenseTotal;

        return `${this.fullName()} has a balance of $${balance}. $${incomeTotal} in income, $${expenseTotal} in expenses.`;
    },

}

// 1. add an income array to the account
// 2. set up an add income method (description, ammount)
// 3. tweak get account summary

// John Dinh has a balance of $10. $100 in income, $90 in expenses

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());
