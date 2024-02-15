const connection = require('./utils/connection');
const { runQuery, runSchema } = require('./utils/executeQuery');

describe('08 - Escreva uma query que adiciona uma coluna nova na tabela `users`. Ela deve se chamar phone_number, seu tipo é VARCHAR e tem um limite de 11 caracteres', function () {
  it('deve ter adicionado a coluna `phone_number` na tabela `users` com as _constraints_ corretas', async function() {
    await runSchema();
    await runQuery('../../src/08_challenge.sql');
    const [tableColumns] = await connection.query('SHOW COLUMNS FROM users');
    expect(tableColumns).toContainEqual({
      Field: 'phone_number',
      Type: 'varchar(11)',
      Null: 'YES',
      Key: '',
      Default: null,
      Extra: ''
    });
  });
});
