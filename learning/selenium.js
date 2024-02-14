const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function exampleTest() {
    const options = new chrome.Options();
    options.addArguments('--headless'); // Run Chrome in headless mode (optional)
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('https://freshspar.com');
        const title = await driver.getTitle();
        console.log('Page title:', title);
    } finally {
        await driver.quit();
    }
}

exampleTest();
