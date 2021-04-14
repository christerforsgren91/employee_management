describe('Display of character modal', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=characters-tab]').click()
    cy.get('[data-cy=character-list]').within(() => {
      cy.get('[data-cy=character-item]') 
      .first()
      .find('[data-cy=view-button]')     
      .click()
    })
  })

  it('opens up a Modal when card is clicked', () => {
    cy.get('[data-cy=modal-container]').should('be.visible')
  });

  it('the modal features expected content', () => {
    cy.get('[data-cy=modal-container]').within(() => {
      cy.get('[data-cy=name]').should('contain', 'Luke Skywalker')
      cy.get('[data-cy=height]').should('contain', '172')
      cy.get('[data-cy=mass]').should('contain', '77')
    })
  });
})
