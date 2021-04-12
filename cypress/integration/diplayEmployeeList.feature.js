describe('Display list of employees', () => {
  before(() => {
    cy.visit('/')
  })

  it('display a header', () => {
    cy.get('[data-cy=header]').should('contain', 'Employee List')
  })
})