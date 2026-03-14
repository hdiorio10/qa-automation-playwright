import { test, expect } from '@playwright/test';

test('teste formulario', async ({ page }) => {

 await page.goto('https://demoqa.com/automation-practice-form');

 await page.fill('#firstName', 'Helder');

 await page.fill('#lastName', 'Teste');

 await page.fill('#userEmail', 'teste@email.com');

});