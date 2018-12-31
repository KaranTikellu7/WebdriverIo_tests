const signin = require('../PageObjects/SignIn.Page')

beforeEach(() => 
{
    browser.url('./')
})

describe('Verifying Elements on SignIn page', () => 
{
    it('Verifing Headers', () => 
    {
        expect(signin.Header_Label.getText()).to.equal("AceInvoice")
        expect(signin.TagLine.getText()).to.equal("Time Tracking and Invoicing")
        expect(signin.Aceinvoice_Logo.isVisible()).to.true
    })

    it('Verifing LoginBox', () => 
    {
        expect(signin.SignIn_Label.isVisible()).to.true
        expect(signin.Email_Textbox.isVisible()).to.true
        expect(signin.Password_Textbox.isVisible()).to.true
        expect(signin.RememberMe_Label.isVisible()).to.true
        expect(signin.RememberMe_Label.getText()).to.equal("Remember Me")
        expect(signin.Login_Button.getValue()).to.equal("Login")
        expect(signin.Login_Button.isVisible()).to.true
        expect(signin.ForgetPassword_Link.isVisible()).to.true
    })

    it('Verifying SignUp Block', () => 
    {
        expect(signin.Dont_have_account_Link.isVisible()).to.true
    })
})