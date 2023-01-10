// tests/common.js

const { test, expect } = require("@playwright/test");

module.exports = {
  login: async function (page, url, email, pwd) {
    // I go to website page
    await page.goto(url)

    // If email is known, email input is filled with this value
    if(email){
      await page.getByTestId('login-field-email').fill(email)
    }

    // If password is known, password input is filled with this value
    if(pwd){
      await page.getByTestId('login-field-password').fill(pwd)
    }

    // I click on submit button
    await page.getByTestId('login-button-submit').click()
  },
};