describe("User can navigate to CV", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });
       
  it("displays component name in url", () => {
    cy.url().should("contain", "cv");
  });

  it("is expected to contain cv in header" , () => {
    cy.get("#cv-tab").should("contain", "CV");
  })

  it("is expected to contain Work Experience", () => {
    cy.get('#cv-header').should("contain", "Work Experience");
  })

  it("is expected to contain Education", () => {
    cy.get('#cv-header-2').should("contain", "Education");
  });
});