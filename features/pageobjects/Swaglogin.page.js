class SwagLoginPage {
    get usernameInput() { return $('//input[@placeholder="Username"]'); }
    get passwordInput() { return $('//input[@placeholder="Password"]'); }
    get loginButton() { return $('//input[@type="submit"]'); }
    get productsTitle() { return $('//span[@class="title" and contains(text(),"Products")]');}
    productOnPage(name) { return $(`//div[@class="inventory_item_name" and contains(text(),"${name}")]`); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async pageLoadedCheck(){
        await this.productsTitle.waitForExist({ timeout: 5000 });
        await expect(this.productsTitle.toBeDisplayed());
        await console.log("Swag page is loaded fine");
    }

    async productFound(product){
        await expect(this.productOnPage('Sauce Labs Backpack').toBeDisplayed());
        await console.log("Product is present");
    }
}

module.exports = new SwagLoginPage();