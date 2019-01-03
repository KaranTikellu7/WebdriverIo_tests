class CommonFields
{
  get ErrorMessage() { return $("//div[text()='Incorrect email or password']") }
  get Aceinvoice_Logo() {return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]')}
  get Header_Label() {return $("h2=AceInvoice")}
  get TagLine(){return $(".form-heading")}

  constructor() 
  {
    this.AceinvoiceHeader_Text = "AceInvoice"
    this.Tagline_Text = "Time Tracking and Invoicing"
    this.RememberMe_Text = "Remember Me"
    this.LoginButton_Text = "Login"
    
    this.Demo_EmailAddress_Text = "demo@gmail.com"
    this.Valid_EmailAddress = "Prabhakar+test@bigbinary.com"
    this.Valid_Password = "welcome"

    this.Invalid_EmailAddress = "Demo@example.com"
    this.Invalid_Password = "demo1234"

    this.Invalid_ErrorMessage = "Incorrect email or password"
  }

  //Method for opening Aceinvoie URL.
  OpenBrowser(URL) 
  {
    browser.url('/'+URL)
  }

  //Method for taking pause between actions.
  Wait(time) 
  {
    browser.pause(time)
  }
}

module.exports = new CommonFields();
