const Page = require('../pageobjects/page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoanRepaymentPage extends Page {
    /**
     * define selectors using getter methods
     */

    get pageHeader() { return $('h1') };
    get typeOfLoan() { return $('#loanType') };
    get loanAmount() { return $('#loanAmount') };
    get loanTerm() { return $('#loanTerm') };
    get repaymentFrequency() { return $('#repaymentFrequency') };
    get interestRate() { return $('#interestRate') };
    get calculate() { return $('#btnSubmit') };
    get applyInNetBank() { return $('#btnApplyNetBank') };
    get result() { return $('.result-block') };

    
    // select loan type method
    selectLoanType(loanType) {
        this.typeOfLoan.selectByVisibleText(loanType);
    }

    // set loan amount method
    setLoanAmount(loanAmount) {
        this.loanAmount.setValue(loanAmount);
    }

    // select loan term method
    selectLoanTerm(loanTerm) {
        this.loanTerm.selectByVisibleText(loanTerm)
    }

    // select repayment frequency method
    selectRepaymentFrequency(repaymentFrequency) {
        this.repaymentFrequency.selectByVisibleText(repaymentFrequency);
    }

    // set interest rate method
    setInterestRate(interestRate) {
        this.interestRate.setValue(interestRate);
    }

    // calculate repayment amount
    calcualteRepayment() {
        this.calculate.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */

    open () {
        return super.open('digital/calculators/personal-loan-repayment-calculator');
    }

}

module.exports = new LoanRepaymentPage();
