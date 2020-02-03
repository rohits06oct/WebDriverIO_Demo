import { Given, When, Then } from 'cucumber';

let url= "https://www.espn.in?_adblock=true&src=com&adtar=pc12345";   //SEWEB-10789
let assert= require('chai').assert;

Given(/^I am a user on espn.com$/, function () {
    browser.setWindowSize(1680, 1050);
    browser.url(url);
});

When(/^I click Top Events button$/, function () {
    browser.$("div.dropdown-wrapper.league-nav-desktop.desktop-dropdown.hoverable > button").click();
});

Then(/^the dropdown menu appears$/, function () {
    var menu=browser.$('div.dropdown-wrapper.league-nav-desktop.desktop-dropdown.hoverable > ul').isDisplayed();
    assert.equal(menu, true);
});