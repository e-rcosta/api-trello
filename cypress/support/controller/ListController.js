/// <reference types="Cypress" />

import { key, token } from "../../date/card.date";

class ListController {

    _key;
    _token;

    constructor() {
        this._key = key;
        this._token = token;
    }

    createList(name, idboard) {
        let baseUrl = Cypress.config('baseURL')

        return cy.request({
            method: 'POST',
            url: `${baseUrl}/boards/${idboard}/lists`,
            qs: {
                key,
                token,
                name
            },
            failOnStatusCode: false
        });
    }
};

export default ListController;