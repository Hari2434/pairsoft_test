const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page');


const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await HomePage.openPairSoftHomePage();
});

When(/^I perform login (.+) (.+)$/, async (username,password) => {
    await HomePage.performLogin(username,password);
});

Then(/^I select (.+) option$/, async (option) => {
    await HomePage.selectChooseStep(option);
});

Then(/^I select row (.+) from table$/, async (row) => {
    await HomePage.selectRow(row);
});

Then(/^Hover over (.+) and download file$/, async (button) => {
    await HomePage.HoverOverAndClickDownload();
});

Then(/^I should print column values for selected row (.+)$/, async (row) => {
    await HomePage.printValuesForSelectedRow(row);
});

