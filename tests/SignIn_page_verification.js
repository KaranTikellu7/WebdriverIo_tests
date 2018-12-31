const signin = require('../PageObjects/SignIn.Page')

beforeEach(() => 
{
    browser.url('./')
})

describe('Verifying Elements on SignIn page', () => 
{
    it('Verifing Headers', () => 
    {
        expect(signin.Header_Label.getText()).is.equal("AceInvoice")
        expect(signin.TagLine.getText()).is.equal("Time Tracking and Invoicing")
        expect(signin.Aceinvoice_Logo.isExisting()).to.true
    })

    it('Verifing LoginBox', () => 
    {
        expect(signin.SignIn_Label.isExisting()).to.true
        expect(signin.Email_Textbox.isExisting()).to.true
        expect(signin.Password_Textbox.isExisting()).to.true
        expect(signin.RememberMe_Label.isExisting()).to.true
        expect(signin.RememberMe_Label.getText()).is.equal("Remember Me")
        expect(signin.Login_Button.getValue()).to.be.equal("Login")
        expect(signin.Login_Button.isExisting()).to.true
        expect(signin.ForgetPassword_Link.isExisting()).to.true
    })

    it('Verifying SignUp Block', () => 
    {
        expect(signin.Dont_have_account_Link.isExisting()).to.true
    })
})