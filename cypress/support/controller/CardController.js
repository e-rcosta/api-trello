/// <reference types="Cypress" />

import { key, token } from "../../date/card.date";

class CardController {

    _key;
    _token;

    constructor() {
        this._key = key;
        this._token = token;
    }

    createCard(name, idList, tokenValido, validList) {
        let baseUrl = Cypress.config('baseURL')

        return cy.request({
            method: 'POST',
            url: `${baseUrl}/cards`,
            qs: {
                key,
                token: tokenValido ? this._token : Math.random(),
                idList: validList ? idList : Math.random(),
                name
            },
            failOnStatusCode: false
        });
    }

    editCard(id, name, desc, tokenValido) {
        let baseUrl = Cypress.config('baseURL');

        return cy.request({
            method: 'PUT',
            url: `${baseUrl}/cards/${id}`,
            qs: {
                key,
                token: tokenValido ? this._token : Math.random(),
                name,
                desc
            },
            failOnStatusCode: false
        });
    }

    deleteCard(id, tokenValido) {
        let baseUrl = Cypress.config('baseURL')

        return cy.request({
            method: 'DELETE',
            url: `${baseUrl}/cards/${id}`,
            qs: {
                key,
                token: tokenValido ? this._token : Math.random(),
            },
            failOnStatusCode: false
        });
    }
};


export default CardController;