import { test, expect } from '@playwright/test';

test('validar usuarios da API na interface', async ({ page, request }) => {

  // 1 buscar dados da API
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  expect(response.status()).toBe(200);

  const usuarios = await response.json();

  const nomeUsuario = usuarios[0].name;

  // 2 abrir site com lista de usuarios
  await page.goto('https://jsonplaceholder.typicode.com/');

  // 3 validar se a pagina carregou
  await expect(page).toHaveTitle(/JSONPlaceholder/);

  console.log("Primeiro usuário da API:", nomeUsuario);

});