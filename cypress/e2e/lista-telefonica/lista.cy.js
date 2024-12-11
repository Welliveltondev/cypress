/// <reference types="cypress" />


describe('Teste da lista telefonica', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('teste de inclusao de telefone')
    cy.get('input[type="text"]').type('Wellivelton fonsca')
    cy.get('input[type="email"]').type('wellivelton@fonseca')
    cy.get('input[type="tel"]').type('12 2345676')
    cy.get('button[type="submit"]').first().click()

    it('Teste de remocao de conato')
    cy.get('.delete').click()

    it('teste de edicao de contato')
    cy.get('sc-eDDNvR cTVgex > li').type('Anderson fonseca')
    cy.get('.edit').first().click()
})
