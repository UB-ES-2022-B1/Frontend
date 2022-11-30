describe("get-house", () => {
  it("get house", function () {
    cy.visit("https://test-dev--housh.netlify.app");
    cy.get("img[tabindex='-1']").first().click({force: true})
    cy.url().should("include", "https://test-dev--housh.netlify.app/apartment/")
    cy.get("img[tabindex='-1']").should("exist")
    cy.get("*[class='chakra-text css-1jijfcn']").should("exist")
    cy.get("*[class='css-1u27lgg']").children().children().should('have.class', 'chakra-button css-x66jzz').
    should("exist")
    cy.get("*[aria-label='Compartir']").should("exist")
    cy.get("*[aria-label='Guardar']").should("exist")
    cy.get("*[class='css-ncfona']").children().children().should("include.text","guests")
    cy.get("*[class='css-ncfona']").children().children().should("include.text","bathrooms")
    cy.get("*[class='css-ncfona']").children().children().should("include.text","beds")
    cy.get("*[class='css-ncfona']").children().children().should("include.text","bedrooms")
    cy.contains("About this space")
    cy.contains("What is in this accommodation?")
    cy.get("div[class='css-1go7o0l']").should("exist")
});
});
