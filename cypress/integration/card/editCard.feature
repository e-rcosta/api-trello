# language: pt

Funcionalidade: Editar um Cartão
  Como um usuário do trello
  Rosangela quer editar um cartão

Contexto:
  Dado que Rosangela acessa o trello para editar um cartão

Cenário: Editar um cartão válido com autenticação válida
  Quando Rosangela solicitar editar um cartão com nome "Cartão Editado" e autenticação válida
  Então será retornado o status da edição 200
  E os dados do edição do cartão serão exibidos
  E exclui as sujeiras da edição

Cenário: Editar um cartão válido com autenticação invalida
  Quando Rosangela solicitar editar um cartão com autenticação inválida
  Então será retornado o status da edição 401

Cenário: Editar um cartão inválido com autenticação valida
  Quando Rosangela solicitar editar um cartão inválido e autenticação valida
  Então será retornado o status da edição 400

Cenário: Editar um cartão inválido com autenticação inválida
  Quando Rosangela solicitar editar um cartão inválido e autenticação inválida
  Então será retornado o status da edição 401