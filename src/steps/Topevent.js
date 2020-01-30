import { Given, When, Then } from 'cucumber';

let url= "https://www.espn.com/";   //SEWEB-10789
let assert= require('chai').assert;

Given(/^I am a user on espn.com$/, function () {
    browser.url(url);
});

When(/^I click Top Events button$/, function () {
    var str=browser.$("div.dropdown-wrapper.league-nav-desktop.desktop-dropdown.hoverable > button").getText();
    assert.equal("TOP EVENTS",str);
    browser.$("div.dropdown-wrapper.league-nav-desktop.desktop-dropdown.hoverable > button").click();
    browser.pause(5000);
});

Then(/^the dropdown menu appears$/, function () {
    
    //assert.equal("https://the-internet.herokuapp.com/secure", url);
});

Then(/^the dropdown menu scrollable$/, function () {
    
    //assert.equal("https://the-internet.herokuapp.com/secure", url);
});