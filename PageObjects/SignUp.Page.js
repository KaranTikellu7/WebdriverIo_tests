class SignUp_Values
{
    get CreateAccount_Label() {return $('h3=Create Account')}
    get Email_Textbox() {return $('input[name=email]')}
    get GetStarted_Button() {return $('input[name=get_started]')}    
    get Already_have_account_Link() {return $("a=Already have an account? Sign in")}      
    get Password_Label(){return $("label=* Password")}
    get Password_Confirmation_Label(){return $("label=* Password Confirmation")}
    get Password_Textbox(){return $("input[name=password]")}
    get Password_Confirmation_Textbox(){return $("input[name=password_confirmation]")}
    get Continue_Button(){return $("input[name=continue]")}
    
    constructor()
    {
        this.CreateAccount_Text = "Create Account"
        this.GetStarted_Text = "Get Started"
        this.Password_Text= "* Password"
        this.Password_Confirmation_Text= "* Password Confirmation"
        this.ContinueButton_Text= "Continue"
    }
    Click_GetStarted_Button()
    {
        this.GetStarted_Button.click()
    }
}

module.exports= new SignUp_Values();

