describe('List of Caracters', () => {
  beforeEach(() => {
    cy.visit('/')
    /*cy.get('[data-cy=star-wars-tab]').click()*/
  })

  it('display a header', () => {
    cy.get('[data-cy=character-header]').should('contain', 'Character List')
  })

  it('renders character list properly', () => {
    cy.get('[data-cy=character-list]').within(() => {
      cy.get('[data-cy=character-item]')
        .first()
        .find('[data-cy=name]')
        .should('contain', 'Luke Skywalker')
    })
  })

  it('renders an image next to the character name', () => {
    cy.get('[data-cy=character-list]').within(() => {
      cy.get('[data-cy=character-item]')
        .first()
        .find('[data-cy=hair-color]')
        .should('contain', 'blond')
    })
  })

  it('check number of character', () => {
    cy.get('[data-cy=character-item]').should('have.length', 6)
  });
})
