class CommonFields
{
  get ErrorMessage() { return $("//div[text()='Incorrect email or password']") }

  constructor() 
  {
    this.AceinvoiceHeader_Text = "Aceinvoice"
    this.Tagline_Text = "Time Tracking and Invoicing"
    this.RememberMe_Text = "Remember Me"
    this.LoginButton_Text = "Login"
    
    this.Valid_EmailAddress = "Prabhakar+test@bigbinary.com"
    this.Valid_Password = "welcome"

    this.Invalid_EmailAddress = "Demo@example.com"
    this.Invalid_Password = "demo1234"

    this.Invalid_ErrorMessage = "Incorrect email or password"
  }

  //Method for opening Aceinvoie URL.
  OpenBrowser() 
  {
    browser.url('/')
  }

  //Method for taking pause between actions.
  Wait(time) 
  {
    browser.pause(time)
  }
}

module.exports = new CommonFields();
