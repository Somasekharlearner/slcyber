const LoginPage = require('../pages/login.page')

describe('PostCode Update Test', () => {

    it('Login Test', async () => {
        browser.url('https://account.bbc.com/signin')
        await browser.maximizeWindow()
        await LoginPage.login('sekharnaidu.allu@gmail.com', 'Sekh@r1995')
        await LoginPage.editPostcode("IG119XH")
        })
})