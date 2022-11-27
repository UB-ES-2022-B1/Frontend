describe("Register house", () => {

  it("Can Register house through the UI", function () {
    cy.visit("https://test-dev--housh.netlify.app/add/");

    cy.get("*[type='button']").contains("Apartment").click()
    cy.get("button").contains("Next").click();

    cy.get("*[type='button']").contains("An entire accommodation").click()
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
    cy.get("*[type='button']").contains("WIFII").click()
    cy.get("*[type='button']").contains("TV").click()
    cy.get("*[type='button']").contains("Kitchen").click()
    cy.get("*[type='button']").contains("Washing machine").click()
    cy.get("*[type='button']").contains("Free parking").click()
    cy.get("*[type='button']").contains("Air conditioning").click()
    cy.get("*[type='button']").contains("Swiming Pool").click()
    cy.get("*[type='button']").contains("Garden").click()
    cy.get("*[type='button']").contains("Billar table").click()
    cy.get("*[type='button']").contains("GYM").click()
    cy.get("*[type='button']").contains("Spacious").click()
    cy.get("*[type='button']").contains("Dishwasher").click()
    cy.get("*[type='button']").contains("Central").click()
    cy.get("*[type='button']").contains("Quite").click()
    cy.get("*[type='button']").contains("Alarm").click()
    cy.get("*[type='button']").contains("Smoke detector").click()
    cy.get("*[type='button']").contains("Healh kit").click()

    cy.get("button").contains("Next").click();
    //images
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

    cy.get("button[type='submit']").click();

    cy.wait(5000);
  });
});