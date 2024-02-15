const { runQuery, runSchema } = require('./utils/executeQuery');

describe('03 - Escreva uma query que retorna apenas o id, nome e sobrenome das pessoas usuárias que se chamem Terry ou Demetrius e que tenham 31 anos', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    const [result] = await runQuery('../../src/03_challenge.sql');
    expect(result).toStrictEqual([
      { id: 1, first_name: 'Terry', last_name: 'Medhurst' },
      { id: 7, first_name: 'Demetrius', last_name: 'Corkery' },
    ]);
  });
});
