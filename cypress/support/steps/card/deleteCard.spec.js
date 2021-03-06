/* global Given, Then, When, And */

import CardController from '../../controller/cardController';

const card = new CardController();

before(() => {
  cy.createNewCard('Cartão criado')
    .then((res) => { }).as('resCard');
});

Given('que Rosangela acessa o trello para deletar um cartão', () => { });

when('Rosangela solicitar deletar um cartão válido com autenticação válida', () => {
  cy.get('@resCard').then((res) => {
    card.deleteCard(res.body.id, true).then((res) => {}).as('resDelCard');
  });
});

when('Rosangela solicitar deletar um cartão válido com autenticação inválida', () => {
  card.deleteCard(Cypress.env('idCard'), false).then((res) => {}).as('resDelCard');
});

when('Rosangela solicitar deletar um cartão invalido com autenticação inválida', () => {
  card.deleteCard(Math.random(), true).then((res) => {}).as('resDelCard');
});

when('Rosangela solicitar deletar um cartão que já foi excluido e autenticação válida', () => {
  card.deleteCard(Cypress.env('idCard'), true).then((res) => {}).as('resDelCard');
});

Then('será retornado o status da deleção {int}', (statusCode) => {
  cy.get('@resDelCard').then((res) => {
    expect(res.status).to.be.equal(statusCode);
  });
});

And('exclui as sujeiras da deleção', () => {
  cy.excluirSujeira();
});
