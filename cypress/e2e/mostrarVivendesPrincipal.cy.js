describe("get-house", () => {
  it("get house", function () {
    cy.visit("https://test-dev--housh.netlify.app");
    cy.get("img[tabindex='-1']").first().click({force: true});
    const firstUrl = cy.url();
    cy.go('back');
    cy.get("img[tabindex='-1']").last().click({force: true});
    cy.url().should("not.eq", firstUrl)
});
});
