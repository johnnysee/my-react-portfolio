describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("http://localhost:3000");
    cy.get("#about-header").should("contain", "About Me");
    cy.get("#footer").should("contain", "Made with React");
  });
})