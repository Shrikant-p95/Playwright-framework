class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('Email Address');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Log In' });
    }

    async login(userName, Password) {
        await this.username.fill(userName);
        await this.page.waitForTimeout(3000);
        await this.password.fill(Password);
        await this.page.waitForTimeout(3000);
        await this.loginButton.click();
        await this.page.waitForTimeout(3000);
    }
}

export default LoginPage;