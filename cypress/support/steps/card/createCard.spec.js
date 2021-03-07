/* global Given, Then, When, And */

import CardController from '../../controller/cardController';

const card = new CardController();

before(() => {
  cy.getList();
});

Given('que Rosangela acessa o trello', () => { });

When('Rosangela solicitar criar um novo cartão com nome {string} e autenticação válida', (nameCard) => {
  card.createCard(nameCard, Cypress.env('idList'), true, true)
    .then((res) => { }).as('resCard');
});

When('Rosangela solicitar criar um novo cartão com nome {string} e autenticação inválida', (nameCard) => {
  card.createCard(nameCard, Cypress.env('idList'), false, true)
    .then((res) => { }).as('resCard');
});

When('Rosangela solicitar criar um cartão com uma lista inválida e autenticação valida', () => {
  card.createCard('teste-API-card', Cypress.env('idList'), true, false)
    .then((res) => { }).as('resCard');
});

When('Rosangela solicitar criar um cartão com uma lista inválida e autenticação inválida', () => {
  card.createCard('teste-API-card', Cypress.env('idList'), false, false)
    .then((res) => { }).as('resCard');
});

Then('será retornado o status {int}', (statusCode) => {
  cy.get('@resCard').then((resCard) => {
    expect(resCard.status).to.be.equal(statusCode);
  });
});

And('os dados do cartão serão exibidos', () => {
  cy.get('@resCard').then((resCard) => {
    expect(resCard.body.id).to.exist;
  });
});

And('exclui as sujeiras', () => {
  cy.excluirSujeira();
});
