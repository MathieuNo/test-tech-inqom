import { test, expect } from '@playwright/test';
const common = require("../common");

test('Add profil photo', async ({ page }) => {
  // TODO : create an environment file to externalize environment variables.
  const email = 'inqom.qaautomationapplicant@gmail.com'
  const pwd = 'o5N,d5ZR@R7^'

  // I go to website page with right logins and I click on submit button
  await common.login(page, 'http://www.welcometothejungle.com/fr/me/settings/account', email, pwd)

  // I upload a new profil image
  await page.setInputFiles("#avatar input[type='file']", './assets/photo.png')
  
  // Click on Upload Button
  await page.getByTestId('account-edit-button-submit').click()

  await expect(page.getByText("Mise à jour réussie !")).toBeVisible()
  await expect(page.locator('#avatar img')).not.toBeNull()
});
