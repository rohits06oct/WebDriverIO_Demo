import { Given, When, Then } from 'cucumber';
import LoginPage from '../actions/Login.page';

let strUrl = "https://the-internet.herokuapp.com/login";
let assert = require('chai').assert;

Given(/^I'm on the login page$/, function () {
    browser.url(strUrl);
});

When(/^I login with the default user$/, function () {
    LoginPage.login();
});

Then(/^I shall be on the secure area page$/, function () {
    strUrl = browser.getUrl();
    assert.equal("https://the-internet.herokuapp.com/secure", strUrl);
});

When(/^I click on logout button$/, function () {
    LoginPage.logout();
});

Then(/^I will comeback to login page$/, function () {
    strUrl = browser.getUrl();
    assert.equal("https://the-internet.herokuapp.com/login", strUrl);
});