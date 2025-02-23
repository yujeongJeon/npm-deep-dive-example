const {Loan} = require('./loan')

const loan = new Loan(10000, 0.4)

console.log(loan.amount, loan.interestRate)

// const {LoanFromExports} = require('./loan')

// const loanFromExports = new LoanFromExports(10000, 0.4) // TypeError: LoanFromExports is not a constructor

const loanModule = require('./wrong')

console.log(loanModule) // {}