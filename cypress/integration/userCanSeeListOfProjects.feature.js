describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "ATM Machine App");
      cy.get(".description").should("contain", "This was my first ruby application. It is an ATM machine where the user can create a person, account and an ATM in terminal.");
    });
  });

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Library App");
      cy.get(".description").should(
        "contain",
        "It is a library application written in Ruby. A user can create a library and a visitor in terminal"
      );
    });
  });

  it("displays the third object", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Address Book App");
      cy.get(".description").should(
        "contain",
        "It is an Address Book App where the user can add new contacts which will be added in a list."
      );
    });
  });
});