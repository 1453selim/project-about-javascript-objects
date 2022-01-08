const personAccount = {
    firstName : "Selim",
    lastName : "Cihan",
    incomes : [2000, 1100, 500, 550],
    expenses : [1640, 350, 600, 1500],
    totalIncome : function () {
      var sum = this.incomes.reduce(function(a, b){
        return a + b;
      }, 0);  
      return sum;
    },
    totalExpense : function () {
      var sum = this.expenses.reduce(function(a, b){
        return a + b;
      }, 0);  
      return sum;
    },
    addIncome : function (price) {
      return this.incomes.push(price);
    },
    addExpenses : function (price) {
      return this.expenses.push(price);
    },
    accountInfo : function () {
      let totalProfit = this.totalIncome() - this.totalExpense();
      return `${this.firstName} ${this.lastName} has ${totalProfit} dolar profit today`;
    }
  
  }
  
  personAccount.addIncome(700);
  personAccount.addExpenses(220);
  
  console.log(personAccount);
  
  console.log(`My total income : ${personAccount.totalIncome()}`);
  console.log(`My total expenses : ${personAccount.totalExpense()}`);
  console.log(personAccount.accountInfo());
  
  
  
  
  // WITH CONSTRUCTOR(write object'key to function as parametre)
  function totalAccount (firstName, lastName, incomes = [], expenses =[]) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.incomes = incomes,
    this.expenses = expenses,
    this.totalIncome = () => this.incomes.reduce((a, b) => a + b ,0),   
    this.totalExpense = () => this.expenses.reduce((a, b) => a + b,0 ),   
    this.addIncome = (value) => this.incomes.push(value),
    this.addExpenses = (value) => this.expenses.push(value),
    this.accountInfo = () => `This month's profit for ${this.firstName} ${this.lastName} has ${this.totalIncome() - this.totalExpense()} TL  `
  }
  
  const person1 = new totalAccount('Selim', "İsabetli", [10000,700,900,400], [1200,1025,4250]);     
  const person2 = new totalAccount('Ahmet', "Kuru", [14000,5000,2000,5000], [10000,1500,4500,2000]);  
  
  console.log(`${person1.firstName} has total income : ${person1.totalIncome()}`);
  console.log(`${person2.firstName} has total income : ${person2.totalIncome()}`);
  console.log(person1.accountInfo());
  console.log(person2.accountInfo());

