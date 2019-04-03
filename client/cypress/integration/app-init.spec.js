describe('App initialization', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('Loads the initial page view', () => {
        cy.get('.film-link')
            .should('not.exist')
    })

    it('Films container should contain empty text', () => {
        cy.get('.empty-text')
            .and('contain', 'Please, select your desired film..')
    })

    it('Title Search Button  should be selected by default', () => {
        cy.get('#active')
            .and('contain', 'title')
    })

    it('Search by filter  should be change after click', () => {
        cy.get('.search-wrapper label:not(#active)')
            .click()
            .should('have.id', 'active')
    })

    it('Text input has autofocus on load', () => {
        cy.get(":focus")
            .should('have.id', 'searchInput')
    })

    it('Accepts input and find searched films', () => {
        const typedText = 'comedy'

        cy.get('#searchInput')
            .as('input')

        cy.get('@input')
            .type(typedText)
            .should('have.value', typedText)

        cy.get('#genreChoice + label')
            .click()

        cy.get('#searchBtn')
            .click()

        cy.get('.film-link')
            .as('filmList')

        cy.get('@filmList')
            .should('have.length.of.at.least', 1)

        cy.get('@filmList')
            .first()
            .click()

        cy.get('.film-info-wrapper')
            .should('exist')

        cy.get('#backToSearch')
            .click()

        cy.get('.film-info-wrapper')
            .should('not.exist')

    })

})
