describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays the first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "ATM Machine App");
      cy.get(".description").should("contain", "The user can create a person, account and an ATM in terminal. User can enter their personal pin code and check their balance and withdraw money.");
    });
  });

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Library App");
      cy.get(".description").should(
        "contain",
        "The user can create a library and a visitor in terminal. The librarian can check the library's collection of books, but also check available books. The visitor can checkout book and see return date."
      );
    });
  });

  it("displays the third object", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Address Book App");
      cy.get(".description").should(
        "contain",
        "The user can add new contacts which will be added in a list."
      );
    });
  });
});