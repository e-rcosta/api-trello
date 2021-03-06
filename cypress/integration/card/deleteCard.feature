# language: pt

Funcionalidade: Deletar um Cartão
  Como um usuário do trello
  Rosangela quer deletar um cartão

Contexto:
  Dado que Rosangela acessa o trello para deletar um cartão

Cenário: Deletar um cartão válido com autenticação válida
  Quando Rosangela solicitar deletar um cartão válido com autenticação válida
  Então será retornado o status da deleção 200
  E exclui as sujeiras da deleção

Cenário: Deletar um cartão válido com autenticação invalida
  Quando Rosangela solicitar deletar um cartão válido com autenticação inválida
  Então será retornado o status da deleção 401

Cenário: Deletar um cartão inválido com autenticação valida
  Quando Rosangela solicitar deletar um cartão invalido com autenticação inválida
  Então será retornado o status da deleção 400

Cenário: Deletar um cartão que já foi excluido com autenticação válida
  Quando Rosangela solicitar deletar um cartão que já foi excluido e autenticação válida
  Então será retornado o status da deleção 404