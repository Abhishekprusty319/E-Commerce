class LoginPage{

    constructor(page){
            this.page=page
            this.userName=page.locator("//input[@data-qa='login-email']")
            this.password=page.locator("//input[@data-qa='login-password']")
            this.loginbtn=page.locator("//button[@data-qa='login-button']")
    }

    async validLogin(username,password){
        await this.userName.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }
    async lunchBrowser(){
        await this.page.goto('https://www.automationexercise.com/login')
    }

}
module.exports={LoginPage}