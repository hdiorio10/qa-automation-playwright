import { test, expect } from '@playwright/test';

test('teste api usuarios', async ({ request }) => {

 const response = await request.get('https://jsonplaceholder.typicode.com/users');

 expect(response.status()).toBe(200);

 const usuarios = await response.json();

 expect(usuarios.length).toBeGreaterThan(0);

});