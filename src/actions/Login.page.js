class LoginPage {
    get username() { return $("#username") }
    get password() { return $("#password") }
    get loginBtn() { return $("#login > button > i") }
    get logoutBtn() {return $("#content > div > a") }

    login(){
        this.username.setValue("tomsmith");
        this.password.setValue("SuperSecretPassword!");
        this.loginBtn.click();
    }

    logout(){
        this.logoutBtn.click();
    }
}

export default new LoginPage()