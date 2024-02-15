const { runQuery, runSchema } = require('./utils/executeQuery');

describe('02 - Escreva uma query que retorna as pessoas usuárias que tenham o sobrenome igual à Medhurst ou Hills', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    const [result] = await runQuery('../../src/02_challenge.sql');
    expect(result).toStrictEqual([
      { id: 1, first_name: 'Terry', last_name: 'Medhurst', age: 31, email: 'atuny0@email.com', created_at: new Date('2022-12-31') },
      { id: 2, first_name: 'Miles', last_name: 'Hills', age: 17, email: 'rshawe2@dotmail.com', created_at: new Date('2023-05-10') },
      { id: 3, first_name: 'Sheldon', last_name: 'Hills', age: 18, email: 'num41@email.com', created_at: new Date('2022-12-25') }
    ]);
  });
});
