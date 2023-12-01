describe("various exemples", () => {
  beforeEach(() => { 
    cy.visit("/examples");
   });
  it("multi page testing", () => {
    cy.dataTest("nav-home").click()
    cy.location("pathname").should("eq", "/")
    cy.dataTest("nav-examples").click()
    cy.location("pathname").should("eq", "/examples")
    cy.dataTest("nav-overview").click()
    cy.location("pathname").should("eq", "/overview")
    cy.dataTest("nav-fundamentals").click()
    cy.location("pathname").should("eq", "/fundamentals")
    cy.dataTest("nav-forms").click()
    cy.location("pathname").should("eq", "/forms")
    cy.dataTest("nav-component").click()
    cy.location("pathname").should("eq", "/component")
    cy.dataTest("nav-best-practices").click()
    cy.location("pathname").should("eq", "/best-practices")
  });
});
