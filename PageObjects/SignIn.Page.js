class SignIn_Values{

    get Aceinvoice_Logo() {return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]')}
    get HeaderLabel() {return $("h2=AceInvoice")}
    get TagLine(){return $(".form-heading")}

    get SignIn_Label() {return $('h3=Sign In')}
    get EmailTextbox() {return $("input[name='email']")}
    get PasswordTextbox() {return $("input[name='password']")}
    get RememberMe_Label(){return $('.checkbox-heading')}
    get LoginButton() {return $("input[type='submit']")}
    get ForgetPassword_Link() {return $("a=Forgot Password?")}

    get Dont_have_account_Link() {return $("a=Don't have an account? Sign Up")}
      
}

module.exports= new SignIn_Values();

