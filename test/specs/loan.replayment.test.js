const LoanRepaymentPage = require('../pageobjects/loan.Repayment.Page');


describe('Loan Repayment Calcualtor', () => {
    it('Loan repayment calcualtor page should load with correct heading', () => {
        LoanRepaymentPage.open();
        expect(LoanRepaymentPage.pageHeader).toHaveTextContaining(
            'PERSONAL LOAN REPAYMENTS CALCULATOR');

    });

    it('should be able to choose loan type', () => {
        LoanRepaymentPage.selectLoanType('Fixed Rate');
    });

    it('should be able to enter loan amount', () => {
        LoanRepaymentPage.setLoanAmount(50000);
    });

    it('should be able to choose loan term', () => {
        LoanRepaymentPage.selectLoanTerm('7 years');
    });
    it('should be able to choose repayment frequency', () => {
        LoanRepaymentPage.selectRepaymentFrequency('Fortnightly');
    });

    it('should be able to enter interest rate', () => {
        LoanRepaymentPage.setInterestRate(12.25);
    });

    it('should be able to calculate repayment amount', () => {
        LoanRepaymentPage.calcualteRepayment();
    });



    it('verify repayment amount', () => {
        expect(LoanRepaymentPage.result).toHaveTextContaining('411');
    });


});
