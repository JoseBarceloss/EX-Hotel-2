const { runQuery, runSchema } = require('./utils/executeQuery');

describe('01 - Escreva uma query que retorna as pessoas usuárias que tenham 18 anos ou mais', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    const [result] = await runQuery('../../src/01_challenge.sql');
    expect(result).toStrictEqual([
      { id: 1, first_name: 'Terry', last_name: 'Medhurst', age: 31, email: 'atuny0@email.com', created_at: new Date('2022-12-31') },
      { id: 3, first_name: 'Sheldon', last_name: 'Hills', age: 18, email: 'num41@email.com', created_at: new Date('2022-12-25') },
      { id: 4, first_name: 'Mavis', last_name: 'Abbott', age: 60, email: 'kmeus4@email.com', created_at: new Date('2022-06-01') },
      { id: 5, first_name: 'Oleta', last_name: 'Schultz', age: 29, email: 'dpettegre6@email.com', created_at: new Date('2023-09-25') },
      { id: 7, first_name: 'Demetrius', last_name: 'Corkery', age: 31, email: 'nloiterton8@email.com', created_at: new Date('2023-08-03') },
      { id: 8, first_name: 'Eleanora', last_name: 'Price', age: 39, email: 'umcgourty9@dotmail.com', created_at: new Date('2018-01-16') },
    ]);
  });
});
