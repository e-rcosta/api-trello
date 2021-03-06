/// <reference types="Cypress" />

import { key, token } from "../../date/card.date";

class BoardController {

    _key;
    _token;

    constructor() {
        this._key = key;
        this._token = token;
    }

    createBoard(name) {
        let baseUrl = Cypress.config('baseURL')

        return cy.request({
            method: 'POST',
            url: `${baseUrl}/boards`,
            qs: {
                key,
                token,
                name
            },
            failOnStatusCode: false
        });
    }

    deleteBoard(id) {
        let baseUrl = Cypress.config('baseURL')

        return cy.request({
            method: 'DELETE',
            url: `${baseUrl}/boards/${id}`,
            qs: {
                key,
                token
            },
            failOnStatusCode: false
        });
    }

    getBoard(id) {
        let baseUrl = Cypress.config('baseURL')

        return cy.request({
            method: 'GET',
            url: `${baseUrl}/boards/${id}`,
            qs: {
                key,
                token
            },
            failOnStatusCode: false
        });
    }
};

export default BoardController;