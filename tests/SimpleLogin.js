describe('Ace invoice Login', function () {
    it('should login successfully', () => {
        browser
            
        .url('./')

        // Email address textbox xpath
        var EmailAddress_Path = "//input[@name='email']"
        var EmailAddress = "prabhakar+test@bigbinary.com"

        // Password textbox xpath
        var Password_Path = "//input[@name='password']";
        var Password = "welcome"

        // Login button xpath
        var loginButton = "//input[@value='Login']"

        // Entering Email values to the textbox
        browser.setValue(EmailAddress_Path , EmailAddress)

        // Entering Password values to the textbox
        browser.setValue(Password_Path, Password)

        // Clicking on Login button 
        browser.click(loginButton)
    })
})