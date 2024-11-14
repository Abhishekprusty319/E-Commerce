const{ Dashboard } = require("./Dashboard");
const{ LoginPage }=require("./LoginPage")
const{ CartPage }=require('./CartPage')
const{Payment}=require('./Payment')

class Repository{
    constructor(page){
        this.page=page
        this.loginpage=new LoginPage(page)
        this.dashboard=new Dashboard(page)
        this.cartpage=new CartPage(page)
        this.payment=new Payment(page)
    }

    getLoginPage(){
        return this.loginpage;
    }
    getdashboardpage(){
        return this.dashboard;
    }
    getCartpage(){
        return this.cartpage;
    }
    getpaymentPage(){
        return this.payment;
    }
    
}
module.exports={Repository}