class LoginPage{

    get usernameTextbox(){
        return $('#user-identifier-input')
    }

    get passwordTextbox(){
        return $('#password-input')
    }

    get loginButton(){
        return $('#submit-button')
     }

    get yourAccount(){
        return $('//*[text()="Your account"]')
      }

    get Settings(){
        return $('//*[text()="Settings"]')
    }
    get Edit(){
        return $('//*[@aria-label="Edit Postcode"]')
    }

    get SaveandContinue(){
        return $('//*[text()="Save and continue"]')
    }

    get PostcodeTextbox(){
        return $('#new-postcode-input')
    }

    get loginMessage(){
        return $('#flash')
    }

    async login(username, password){
        await this.usernameTextbox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginButton.click()
        await this.yourAccount.click()
        await this.Settings.click()
    }

    async editPostcode(postcode){
        await this.Edit.click()
        await this.PostcodeTextbox.setValue(postcode)
        await this.SaveandContinue.click()
    }
}
module.exports = new LoginPage()