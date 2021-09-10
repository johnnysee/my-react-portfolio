describe("User can navigate to CV", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })
    
  it("is expected to be able to click on CV", () => {
    cy.get("#cv-tab").click();
  })

  it("is expected to contain cv in header" , () => {
    cy.get("#cv-tab").should("contain", "CV");
  })

  it("is expected to contain Work Experience", () => {
    cy.get('#cv-tab').should("contain", "Work Experience")
  })

  it("is expected to contain Education", () => {
    cy.get('#cv-tab').should("contain", "Education")
  })
})