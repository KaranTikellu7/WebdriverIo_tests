const signUp= require('../PageObjects/SignUp.Page')
const Common= require('../common_files/Common_Fields')

beforeEach(()=>
{
    Common.OpenBrowser("sign_up")
})

describe('Verify elements on signup page',()=>
{
    it('Verify Headers on signup page',()=>
    {        
        expect(Common.Aceinvoice_Logo.isVisible()).to.true
        expect(Common.Header_Label.getText()).is.equal(Common.AceinvoiceHeader_Text)
        expect(Common.TagLine.getText()).is.equal(Common.Tagline_Text)
    })

    it('Verifying Create Account block',()=>
    {
        expect(signUp.CreateAccount_Label.getText()).to.equal(signUp.CreateAccount_Text)
        expect(signUp.Email_Textbox.isVisible()).to.true
        expect(signUp.GetStarted_Button.getValue()).to.equal(signUp.GetStarted_Text)
    })

    it('verifying signin block',()=>
    {
        expect(signUp.Already_have_account_Link.isVisible()).to.true
    })

    it('verifying setting password block',()=>
    {
        signUp.Email_Textbox.setValue(Common.Demo_EmailAddress_Text)
        signUp.Click_GetStarted_Button()

        expect(signUp.Password_Label.getText()).is.equal(signUp.Password_Text)
        expect(signUp.Password_Textbox.isVisible()).to.true

        expect(signUp.Password_Confirmation_Label.getText()).is.equal(signUp.Password_Confirmation_Text)
        expect(signUp.Password_Confirmation_Textbox.isVisible()).to.true

        expect(signUp.Continue_Button.getValue()).is.equal(signUp.ContinueButton_Text)
    })
})

