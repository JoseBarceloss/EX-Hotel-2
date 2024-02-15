const { runQuery, runSchema } = require('./utils/executeQuery');

describe('05 - Escreva uma query que retorna as pessoas usuárias cadastradas entre as datas 01/06/2022 e 01/06/2023', function () {
  it('Deve retornar os dados corretos', async function() {
    await runSchema();
    const [result] = await runQuery('../../src/05_challenge.sql');
    expect(result).toStrictEqual([
      { id: 1, first_name: 'Terry', last_name: 'Medhurst', age: 31, email: 'atuny0@email.com', created_at: new Date('2022-12-31') },
      { id: 2, first_name: 'Miles', last_name: 'Hills', age: 17, email: 'rshawe2@dotmail.com', created_at: new Date('2023-05-10') },
      { id: 3, first_name: 'Sheldon', last_name: 'Hills', age: 18, email: 'num41@email.com', created_at: new Date('2022-12-25') },
      { id: 4, first_name: 'Mavis', last_name: 'Abbott', age: 60, email: 'kmeus4@email.com', created_at: new Date('2022-06-01') },
    ]);
  });
});
