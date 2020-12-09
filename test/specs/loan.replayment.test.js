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

    // it('there should be three types of loans avilable', () => {
    //     expect(LoanRepaymentPage.typeOfLoan).toHaveTextContaining('Variable Rate');
    //     expect(LoanRepaymentPage.typeOfLoan).toHaveTextContaining('Fixed Rate');
    //     expect(LoanRepaymentPage.typeOfLoan).toHaveTextContaining('Secure Car');

    //     //LoanRepaymentPage.typeOfLoan.selectByVisibleText('Fixed Rate');
    //     // console.log('print selected value' + LoanRepaymentPage.typeOfLoan.getHTML());
    //     // console.log('print selected value' + LoanRepaymentPage.typeOfLoan.getProperty('name'));
    //     // expect(LoanRepaymentPage.typeOfLoan).toHaveTextContaining(
    //     //     'PERSONAL LOAN REPAYMENTS CALCULATOR');

    // });

});




        // assert(LoanRepaymentPage.pageHeader.getText().equal('PERSONAL LOAN REPAYMENTS CALCULATOR'));



        // LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // expect(SecurePage.flashAlert).toBeExisting();
        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
