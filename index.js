const express = require('express');
const consign = require('consign');

let app = express();

consign().include('routes'). into(app);

app.listen(Cypress.config('baseURL'));