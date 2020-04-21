'use strict';

module.exports.hello = async event => {
  console.log('BBaaaDFDFDF')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Aaaaaaaaa',
        input: event,
      },
      null,
      2
    ),
  };
};