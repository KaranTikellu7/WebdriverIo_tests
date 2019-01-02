const Signin_Page = require('../PageObjects/SignIn.Page')
const Common= require('../common_files/Common_Fields')

beforeEach (()=>
{
    Common.OpenBrowser()
})

describe('Verifying error messages While signing in', ()=>
{    
    it('With Blank Email Address and Valid Password',()=>
    {
        Signin_Page.Password_Textbox.setValue(Common.Valid_Password)
        Signin_Page.Login_Button.click()

        Common.Wait(1000)
        expect(Common.ErrorMessage.getText()).to.equal(Common.Invalid_ErrorMessage)            
    })

    it('With Valid Email Address and Empty Password',()=>
    {
        Signin_Page.Email_Textbox.setValue(Common.Valid_EmailAddress)
        Signin_Page.Click_LoginButton()

        Common.Wait(1000)
        expect(Common.ErrorMessage.getText()).to.equal(Common.Invalid_ErrorMessage)        
    })

    it('With Empty Email Address and Empty Password',()=>
    {
        Signin_Page.Click_LoginButton()

        Common.Wait(1000)
        expect(Common.ErrorMessage.getText()).to.equal(Common.Invalid_ErrorMessage)             
    })

    it('With Valid Email Address and Invalid Password',()=>
    {
        Signin_Page.Email_Textbox.setValue(Common.Valid_EmailAddress)
        Signin_Page.Password_Textbox.setValue(Common.Invalid_Password)
        Signin_Page.Click_LoginButton()
        
        Common.Wait(1000)
        expect(Common.ErrorMessage.getText()).to.equal(Common.Invalid_ErrorMessage)        
    })

    it('With Invalid Email Address and Valid Password',()=>
    {
        Signin_Page.Email_Textbox.setValue(Common.Invalid_EmailAddress)
        Signin_Page.Password_Textbox.setValue(Common.Valid_Password)
        Signin_Page.Click_LoginButton()
        
        Common.Wait(1000)
        expect(Common.ErrorMessage.getText()).to.equal(Common.Invalid_ErrorMessage)        
    })

    it('With Invalid Email Address and Invaild Password',()=>
    {
        Signin_Page.Email_Textbox.setValue(Common.Invalid_EmailAddress)
        Signin_Page.Password_Textbox.setValue(Common.Invalid_Password)
        Signin_Page.Click_LoginButton()
        
        Common.Wait(1000)
        expect(Common.ErrorMessage.getText()).to.equal(Common.Invalid_ErrorMessage)            
    })
})