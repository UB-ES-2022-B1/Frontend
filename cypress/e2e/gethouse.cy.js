describe("get-house", () => {
  it("doesn't get house", function () {
    cy.visit("https://test-dev--housh.netlify.app/apartment/noexiste");
    cy.contains("No house with this id");
    });
  it("doesn't get house", function () {
    cy.visit("https://test-dev--housh.netlify.app/apartment/noexiste");
    cy.contains("No house with this id").should('not.exist')
    });
  });
