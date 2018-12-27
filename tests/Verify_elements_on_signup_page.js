const demo = require ('../ObjectPage/SignIn.Page.js')

beforeEach (()=>{
    browser.url('./')
})

describe('Signup page Verification',function(){
    it('Verify elements on signup page',()=> {
    
        // var xpath = $("h2='text-center'")
        const xpath = HeadLabel.getText()
        console.log(xpath)

        expect(xpath).to.equal("AceInvoice")
        // assert.equal(xpath,"AceInvoice")
    })

    it('Verify Header label',()=> {

        var pageTitle =browser.getTitle()
        // var x = "Ace Invoice"
        // assert.equal(pageTitle,"Ace Invoice")
        // expect(actual).to.equal(expected) syntax
        // expect(pageTitle).to.equal("Ace Invoice")
        // expect(pageTitle).to.include("Ace",'Not Found') syntax
        expect(pageTitle).to.include("Ace",'Not Found')
        console.log("Test passed")

        // Verifying getText of aceinvoice

        const HeadLabel = demo.headerl.getText()
        expect(HeadLabel).to.equal("AceInvoice")

    })
})