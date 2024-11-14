class CartPage{

    constructor(page){

        this.page=page
        this.viewCart=page.locator(".modal-content a")
        this.modalPopUp=page.locator(".modal-content").first()
        this.proceedchkOut=page.locator('.btn.btn-default.check_out')
        this.totalAmount=page.locator('tbody tr td:nth-child(4) p')
        this.placeOrder=page.locator('.btn.btn-default.check_out')
        this.rowOrder=page.locator('tbody tr').first()
        
        
    }

    async addtoCart(){
    await this.modalPopUp.waitFor()
    await this.viewCart.click()

    }

    async amountCapture(){

        return await this.actualAmount.textContent()
    }

    // async getProductvisible(productName){
    // await this.page.locator('.product-information').waitFor()
    // const productName=await this.getProductlocator().isVisible()
    // expect(productName).toBeTruthy()
    // }


    // async getProductlocator(){
    //     return this.page.locator(".product-information h2")
    // }

    async proceedCheckout(){
        await this.proceedchkOut.click()
        await this.rowOrder.waitFor()

    }

    async checkOutPage(Amount){
       
        const totalAmount=await this.totalAmount.textContent()
       if(totalAmount===Amount){
       console.log("Price should be:"+totalAmount)
       await this.placeOrder.click()
    }
        
  }
}
module.exports={CartPage}