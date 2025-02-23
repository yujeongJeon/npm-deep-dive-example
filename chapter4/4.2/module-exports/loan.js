class Loan {
    amount = 0
    interestRate = 0.0
  
    constructor(amount, interestRate) {
        this.amount = amount * 10000
        this.interestRate = interestRate
    }
}
  
module.exports = {Loan}

exports.LoanFromExports = Loan