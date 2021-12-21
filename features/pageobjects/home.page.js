

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get searchBar() {
        return $('#twotabsearchtextbox');
    }

    get searchButton(){
        return $('#nav-search-submit-button');
    }

    get ourBrands(){
        return $("//span[text()='Our Brands']/preceding-sibling::div/label/i");
    }

    get add_to_cart(){
        return $('#add-to-cart-button');
    }

    get cartCount(){
        return $('#nav-cart-count');
    }

    get googleSearchBar() {
        return $("//input[@name='q']");
    }

    get udemySearchBar(){
        return $('//*[@name="q"]');
    }

    get sort_dropdown(){
        return $("//*[@form='filter-form']");
    }

    get first_course(){
        return $$("//div[@class='popper--popper--2r2To']//a[contains(@class, 'udlite-custom-focus')]")[0]
    }

    get previewCourseText(){
        return $('span=Preview this course');
    }

    get highestRatedCourse(){
        return $('span=Highest Rated');
    }

    get udemyPage(){
        return $("//body[@id='udemy']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async searchForCategory(category) {
        await this.searchBar.setValue(category);
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }

    async selectCategory(brand){
        await this.ourBrands.scrollIntoView();
        await this.ourBrands.click();
    }

    async selectProduct(product){
        const link = await $('='+product);
        link.click();
    }

    async clickOnAddToCartButton(button_name){
       await this.add_to_cart.click();
    }

    async validateCartCount(count) {
        await expect(this.cartCount).toHaveText(count);
    }

    async searchGooglePage(searchText) {
        await this.googleSearchBar.setValue(searchText);
        await browser.keys('Enter');
    }

    async openGoogle(path) {
        await browser.url('https://www.google.com')
    }

    async openAmazon(path) {
        await browser.url('https://www.amazon.com')
    }

    async closeBrowser(){
        await browser.closeWindow();
    }

    async openLinkContainingText(link_text){
        const link = await $('*='+link_text);
        link.click();
    }

    async validateWebPage(link_text) {
        await expect(this.udemyPage).toBeDisplayed();
    }

    async searchForCourse() {
        await this.udemySearchBar.setValue("BDD with Cucumber");
        await browser.keys('Enter');
    }

    async sortCourseAndSelectfirst(sort_option) {
        await this.sort_dropdown.selectByVisibleText(sort_option);
        await this.first_course.click();
    }

    async validatCoursePreviewPageDisplayed(){
        await expect(this.previewCourseText).toBeDisplayed();
    }

    async validateHighestRatedCourse(){
        await expect(this.highestRatedCourse).toBeDisplayed();
    }
}

module.exports = new HomePage();
