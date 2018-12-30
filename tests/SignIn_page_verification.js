const signin = require('../PageObjects/SignIn.Page')

beforeEach(() => {
    browser.url('./')
})

describe('Verifying Elements on SignIn page', () => {

    it('Verifing Headers', () => {

        expect(signin.HeaderLabel.getText()).is.equal("AceInvoice")
        expect(signin.TagLine.getText()).is.equal("Time Tracking and Invoicing")
        expect(signin.Aceinvoice_Logo.isExisting()).to.true

    })

    it('Verifing LoginBox', () => {

        expect(signin.SignIn_Label.isExisting()).to.true
        expect(signin.EmailTextbox.isExisting()).to.true
        expect(signin.PasswordTextbox.isExisting()).to.true
        expect(signin.RememberMe_Label.isExisting()).to.true
        
        expect(signin.LoginButton.getValue()).to.be.equal("Login")
        expect(signin.LoginButton.isExisting()).to.true

        expect(signin.ForgetPassword_Link.isExisting()).to.true

    })

    it('Verifying signin Block', () => {
        expect(signin.Dont_have_account_Link.isExisting()).to.true
    })
})