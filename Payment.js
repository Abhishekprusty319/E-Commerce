class Payment{
    
    constructor(page){
        this.page=page
        this.cardName=page.locator("//input[@name='name_on_card']")
        this.cardNumber=page.locator("//input[@name='card_number']")
        this.cvcNumber=page.locator("//input[@name='cvc']")
        this.expiryMnth=page.locator("//input[@name='expiry_month']")
        this.expiryYear=page.locator("//input[@name='expiry_year']")
        this.submtBtn=page.locator(".btn-primary.submit-button")
        this.orderConfirmationtext=page.locator('.col-sm-9 p')
    }

    async paymentDetails(Name,cardNumber,CvvNumber,exprirymnth,expiryYear){
    //await page.locator('.btn.btn-default.check_out').click()
    await this.cardName.fill(Name)
    await this.cardNumber.fill(cardNumber)
    await this.cvcNumber.fill(CvvNumber)
    await this.expiryMnth.fill(exprirymnth)
    await this.expiryYear.fill(expiryYear)
    await this.submtBtn.click()
    }

    async orderPlaced(){

    return this.orderConfirmationtext.textContent()
    }
}
module.exports={Payment}