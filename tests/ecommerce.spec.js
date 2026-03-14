import { test, expect } from '@playwright/test';

test('adicionar produto ao carrinho', async ({ page }) => {

  // abrir loja
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // adicionar produto ao carrinho
  await page.click('#add-to-cart-sauce-labs-backpack');

  // abrir carrinho
  await page.click('.shopping_cart_link');

  // validar se produto está no carrinho
  const produto = page.locator('.inventory_item_name');

  await expect(produto).toContainText('Sauce Labs Backpack');

});