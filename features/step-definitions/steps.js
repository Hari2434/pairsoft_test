const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page');


const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await HomePage.openAmazon();
});

When(/^I search for (.*)$/, async (category) => {
    await HomePage.searchForCategory(category)
    await HomePage.clickSearchButton()
});

When(/^I select product (.*)$/, async (product) => {
    await HomePage.selectProduct(product)
});

When(/^I select (.*) check box$/, async (brand) => {
    await HomePage.selectCategory(brand)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see selected product (.+) page$/, async (product) => {
    const product_element= await $('='+product);
    await expect(product_element).toBeExisting();
});

Then(/^I should see proper size (.+) is selected$/, async (size) => {
    const selected_size_element= await $("//*[@class='swatchSelect']//*[@class='a-text-left a-size-base']");
    await expect(selected_size_element).toHaveText(size);
});

When(/^I click on (.+) button$/, async (button) => {
    HomePage.clickOnAddToCartButton(button);
});

Then(/^I should see item count (.+) in cart$/, async (count) => {
    HomePage.validateCartCount(count);
});

Given(/^I am on (.+) page$/, async (page) => {
    await HomePage.openGoogle();
});

When(/^I search google for (.+)$/, async (search) => {
    await HomePage.searchGooglePage(search);
});

Then(/^I close the (.+)$/, async (browser_name) => {
    await HomePage.closeBrowser(browser_name);
});

Then(/^I select link containing (.+)$/, async (link_text) => {
    await HomePage.openLinkContainingText(link_text);
});

Then(/^I validate required website opened (.+)$/, async (link_text) => {
    await HomePage.validateWebPage(link_text);
});

When(/^I select (.+) course$/, async (sort_option) => {
    await HomePage.sortCourseAndSelectfirst(sort_option);
});

Then(/^Validate course (.+) is displayed$/, async (course_option) => {
    await HomePage.validatCoursePreviewPageDisplayed();
});

When(/^I search for (.*) on udemy$/, async (category) => {
    await HomePage.searchForCourse();
});


