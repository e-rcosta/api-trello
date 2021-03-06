# language: pt

Funcionalidade: Criar um Cartão
  Como um usuário do trello
  Rosangela quer criar um cartão

Contexto:
  Dado que Rosangela acessa o trello

Cenário: Criar um cartão válido com autenticação válida
  Quando Rosangela solicitar criar um novo cartão com nome "Novo cartão com autenticação válida"
  Então será retornado o status 200
  E os dados do cartão serão exibidos
  E exclui as sujeiras

Cenário: Criar um cartão válido com autenticação invalida
  Quando Rosangela solicitar criar um novo cartão com nome "Novo cartão" e autenticação inválida
  Então será retornado o status 401

Cenário: Criar um cartão inválido com autenticação valida
  Quando Rosangela solicitar criar um cartão com uma lista inválida
  Então será retornado o status 400

Cenário: Criar um cartão inválido com autenticação inválida
  Quando Rosangela solicitar criar um cartão com uma lista e autenticação inválida
  Então será retornado o status 401