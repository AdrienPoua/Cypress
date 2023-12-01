describe("forms", () => {
   beforeEach(() => {
     cy.visit("/forms");
   }); 
   it("Test subscribe form", () => {
    cy.contains(/testing forms/i)
    cy.dataTest("subscribe-form").find('input').as('subscribeInput' )
    cy.contains(/Successfully subbed/).should('not.exist')
    cy.get('@subscribeInput').type('adrienpoua@gmail.com')
    cy.dataTest("subscribe-btn").click()
    cy.contains(/Successfully subbed/).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed/).should('not.exist')
    cy.get('@subscribeInput').type('adrienpoua@gmail.io')
    cy.dataTest("subscribe-btn").click()
    cy.contains(/Invalid email/i).should('exist')
    cy.wait(3000)
    cy.contains(/Invalid email/i).should('not.exist')
    cy.dataTest("subscribe-btn").click()
    cy.contains(/invalid email/i).should('exist')
   });
});