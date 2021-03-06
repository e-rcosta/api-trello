import BoardController from './controller/BoardController';
import CardController from './controller/cardController';
import ListController from './controller/ListController';

Cypress.Commands.add('getList', () => {
  const board = new BoardController();
  const list = new ListController();

  board.createBoard('teste-api-board').then((res) => {
    list.createList('teste-api-board', res.body.id)
      .then((response) => {
        Cypress.env('idBoard', response.body.idBoard);
        Cypress.env('idList', response.body.id);
        return response;
      });
  });
});

Cypress.Commands.add('createNewCard', (name) => {
  const card = new CardController();

  card.createCard(name, Cypress.env('idList'), true, true)
    .then((response) => {
      Cypress.env('idCard', response.body.id);
      return response;
    });
});

Cypress.Commands.add('excluirSujeira', () => {
  const board = new BoardController();

  board.deleteBoard(Cypress.env('idBoard'))
    .its('status').should('be.equal', 200);
});
