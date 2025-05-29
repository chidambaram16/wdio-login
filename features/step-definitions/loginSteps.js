const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/Swaglogin.page');

Given('I am on Swag the login page', async () => {
    await LoginPage.open();
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then('I should be directed to the home page', async () => {
    await LoginPage.pageLoadedCheck();
});

Then(/^I should see the "([^"]*)"$/, async (productOnPage) => {
    await LoginPage.productFound(productOnPage)
});