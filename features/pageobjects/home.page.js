

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#Username');
    }

    get inputPassword() {
        return $('#Password');
    }

    get PsLogo() {
        return $('img*=PaperSave ID')
    }

    get signInButton() {
        return $('#btnLogin')
    }

    get saveButton() {
        return $('#workflownavigationmenuforblackbaud')
    }

    get chooseStepButton() {
        return $('#workflowStateName')
    }

    get chooseStepDataEntry() {
        return $("//ul[@role='menu']//*[text()='Data Entry']")
    }

    get chooseStepEnter() {
        return $("//ul[@role='menu']//*[text()='Entered']")
    }

    get downloadButton() {
        return $('#btnGridToolbardownload')
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async openPairSoftHomePage(){
           await browser.url("https://psservices.app.cloud.papersave.com/workflow");
           await expect(this.inputUsername).toBeEnabled();
    }

    async performLogin (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.signInButton.click();
        await expect(this.saveButton).toBeDisplayed();
        browser.pause(10000);
    }

    async selectChooseStep(){
        await this.chooseStepButton.click();
        await expect(this.chooseStepEnter).toBeDisplayed();
        await this.chooseStepEnter.click();
        browser.pause(5000);
    }

    async selectRow(row){
        const checkbox= $$("//*[@class='e-checkselectall']")[row+1];
        checkbox.click();
    }

    async HoverOverAndClickDownload(){
        await expect(this.downloadButton).toBeDisplayed();
        await this.downloadButton.moveTo();
        await this.downloadButton.click();
        browser.pause(5000);
    }

    async printValuesForSelectedRow(row){
        await expect($$("//*[@role='columnheader']//*[@class='e-headertext']")).toBeDisplayed();
        const columnValues = $$("//*[@role='columnheader']//*[@class='e-headertext']");
        const visibleCoulmn = new Array();
        columnValues.forEach(element => {
            if(element.isDisplayed() == true) {
                visibleCoulmn.push(element.getText())
            }
        });
       console.log(visibleCoulmn);
    }
}

module.exports = new HomePage();
