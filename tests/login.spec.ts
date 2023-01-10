import { test, expect } from '@playwright/test';
const common = require("../common");

/**
 * Test : Connection accepted
 */
test('Connection OK', async ({ page }) => {
  // TODO : create an environment file to externalize environment variables.
  const email = 'inqom.qaautomationapplicant@gmail.com'
  const pwd = 'o5N,d5ZR@R7^'

  // I go to website page with right logins and I click on submit button
  await common.login(page, 'http://www.welcometothejungle.com/fr/me/settings/account', email, pwd)

  // I check I'm on home page.
  await expect(page.getByText('Hello inqom')).toBeVisible()
});

/**
 * Test : Connection failed because inputs are not filled.
 */
test('Connection KO - no filled login', async ({ page }) => {
  // I go to website page and I click on submit button
  await common.login(page, 'http://www.welcometothejungle.com/fr/me/settings/account')

  // I check I'm always on the same page (signin page) with error messages
  await expect(page).toHaveURL('https://www.welcometothejungle.com/fr/signin')
  await expect(page.getByTestId('login-field-email')).toHaveClass(/(^|\s)fPFHfC(\s|$)/) // Check if email input have error class
  await expect(page.getByTestId('login-field-password')).toHaveClass(/(^|\s)SIjEw(\s|$)/) // Check if email input have error class
  await expect(page.getByText('Champ requis')).toBeVisible() // check error message (for email input) is visible
  await expect(page.getByText('Doit contenir au minimum 8 caractères')).toBeVisible() // check error message (for password input) is visible
})
