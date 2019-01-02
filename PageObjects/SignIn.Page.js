class SignIn_Values
{
    get Aceinvoice_Logo() {return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]')}
    get Header_Label() {return $("h2=AceInvoice")}
    get TagLine(){return $(".form-heading")}
    get SignIn_Label() {return $('h3=Sign In')}
    get Email_Textbox() {return $("input[name='email']")}
    get Password_Textbox() {return $("input[name='password']")}
    get RememberMe_Label(){return $('.checkbox-heading')}
    get Login_Button() {return $("input[type='submit']")}
    get ForgetPassword_Link() {return $("a=Forgot Password?")}
    get Dont_have_account_Link() {return $("a=Don't have an account? Sign Up")}      
    
    //Method for clicking login button.
    Click_LoginButton()
    {
      this.Login_Button.click()
    }
}

module.exports= new SignIn_Values();


