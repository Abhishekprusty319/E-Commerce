class Dashboard{
    constructor(page){
        this.page=page
        this.products=page.locator('.col-sm-9 .col-sm-4')
        this.cartButton=page.locator(".btn.btn-default.cart")
        this.actualAmount=page.locator(".product-information span span")

    }

    async searchProductname(productName){
        //await this.page.waitForTimeout(3000)
        const count=await this.products.count()
        for(let i=0;i<count;++i){

            if(await this.products.nth(i).locator('.productinfo p').textContent() === productName)
                {
                await this.products.nth(i).locator(".choose").click()
                break;
            }
        }
    }
    async amountCapture(){

        return await this.actualAmount.textContent()
    }

    
    async addToCartbtn(){

     await this.cartButton.click()
    }
}
module.exports={Dashboard}