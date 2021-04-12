describe('Display list of employees', () => {
  before(() => {
    cy.visit('/')
  })

  it('display a header', () => {
    cy.get('[data-cy=header]').should('contain', 'Employee List')
  })

  it('renders employee list properly', () => {
    cy.get('[data-cy=employee-list]').within(() => {
      cy.get('[data-cy=employee-item]')
        .first()
        .find('[data-cy=name]')
        .should('contain', 'George Bluth')
    })
  })

  it('renders an image next to employee name', () => {
    cy.get('[data-cy=employee-list]').within(() => {
      cy.get('[data-cy=employee-item]')
        .first()
        .find('[data-cy=avatar]')
        .should('be.visible')
    })
  })
})