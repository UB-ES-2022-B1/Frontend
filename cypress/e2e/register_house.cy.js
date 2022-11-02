describe("Register house", () => {

  it("Can Register house through the UI", function () {
    cy.visit("https://test-dev--housh.netlify.app/add/");
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Next").click();
    cy.get("input[type='text']").type("C/ Gran Via de les Corts Catalanes, 585");
    cy.get("button").contains("Next").click();
    cy.get("[class='chakra-text css-i3jkqk']").contains("Guests").parent().
    siblings().should('have.class', 'css-1u27lgg').children().children().
    should('have.class', 'chakra-button css-unk98u').contains("+").click();
    cy.get("[class='chakra-text css-i3jkqk']").contains("Beds").parent().
    siblings().should('have.class', 'css-1u27lgg').children().children().
    should('have.class', 'chakra-button css-unk98u').contains("+").click();
    cy.get("[class='chakra-text css-i3jkqk']").contains("Bedrooms").parent().
    siblings().should('have.class', 'css-1u27lgg').children().children().
    should('have.class', 'chakra-button css-unk98u').contains("+").click();
    cy.get("[class='chakra-text css-i3jkqk']").contains("Bathrooms").parent().
    siblings().should('have.class', 'css-1u27lgg').children().children().
    should('have.class', 'chakra-button css-unk98u').contains("+").click();
    cy.get("[class='chakra-text css-i3jkqk']").contains("Bathrooms").parent().
    siblings().should('have.class', 'css-1u27lgg').children().children().
    should('have.class', 'chakra-button css-unk98u').contains("-").click();
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Next").click();
    cy.get("input[type='txt']").type("Cypress Test House");
    cy.get("button").contains("Next").click();
    cy.get("input[type='txt']").type("Cypress Test House");
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Back").click();
    cy.get("input[type='txt']").type("Cypress Test House");
    cy.get("button").contains("Next").click();
    cy.get("[role=button]").contains("+").click().click();
    cy.get("[role=button]").contains("-").click();
    cy.get("input[type='text']").clear().type("200");
    cy.get("form").submit();
    cy.wait(5000);
  });
});