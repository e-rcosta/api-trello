import CardController from '../../controller/cardController';

const card = new CardController();

before(() => {
  cy.createNewCard('Cartão sendo editado')
    .then((res) => { }).as('resCard');
});

Given('que Rosangela acessa o trello para editar um cartão', () => { });

When('Rosangela solicitar editar um cartão com nome {string} e autenticação válida', (nameCard) => {
  cy.get('@resCard').then((res) => {
    card.editCard(res.body.id, nameCard, 'Cartão usado para teste automatizados de edição', true)
      .then((res) => { }).as('resCard');
  });
});

When('Rosangela solicitar editar um cartão com autenticação inválida', () => {
  card.editCard(Cypress.env('idCard'), 'Cartão alterado', 'Cartão não sera editado', false)
    .then((res) => { }).as('resCard');
});

When('Rosangela solicitar editar um cartão inválido e autenticação valida', () => {
  card.editCard(Math.random(), '', '', true)
    .then((res) => { }).as('resCard');
});

When('Rosangela solicitar editar um cartão inválido e autenticação inválida', () => {
  card.editCard(Math.random(), '', '', false)
    .then((res) => { }).as('resCard');
});

Then('será retornado o status da edição {int}', (statusCode) => {
  cy.get('@resCard').then((resCard) => {
    expect(resCard.status).to.be.equal(statusCode);
  });
});

And('os dados do edição do cartão serão exibidos', () => {
  cy.get('@resCard').then((resCard) => {
    expect(resCard.body.id).to.exist;
  });
});

And('exclui as sujeiras da edição', () => {
  cy.excluirSujeira();
});
