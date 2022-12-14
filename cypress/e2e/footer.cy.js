describe.skip("footer", () => {
  it("footer exists", function () {
    cy.visit("https://test-dev--housh.netlify.app");
    cy.get("*[class='css-snweje']").should("exist");
  });
  it("privacy", function () {
    cy.visit("https://test-dev--housh.netlify.app");
    const firstUrl = cy.url();
    cy.get("*").contains("Privacy").click();
    cy.url().should("not.eq", firstUrl)
  });
  it("conditions", function () {
    cy.visit("https://test-dev--housh.netlify.app");
    const firstUrl = cy.url();
    cy.get("*").contains("Conditions").click();
    cy.url().should("not.eq", firstUrl)
  });
});