const { runQuery, runSchema } = require('./utils/executeQuery');

describe('04 - Escreva uma query que retorna as pessoas usuárias cujo email pertençam ao domínio dotmail.com', function () {
  it('Deve retornar os dados corretos', async function() {
    await runSchema();
    const [result] = await runQuery('../../src/04_challenge.sql');
    expect(result).toStrictEqual([
      { id: 2, first_name: 'Miles', last_name: 'Hills', age: 17, email: 'rshawe2@dotmail.com', created_at: new Date('2023-05-10') },
      { id: 6, first_name: 'Ewell', last_name: 'Mueller', age: 15, email: 'ggude7@dotmail.com', created_at: new Date('2019-09-02') },
      { id: 8, first_name: 'Eleanora', last_name: 'Price', age: 39, email: 'umcgourty9@dotmail.com', created_at: new Date('2018-01-16') },
    ]);
  });
});
