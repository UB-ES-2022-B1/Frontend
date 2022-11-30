describe("Register house", () => {

  it("Can Register house through the UI", function () {

    cy.visit("https://test-dev--housh.netlify.app/login");


    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Home").should("exist").click({force:true});

    cy.visit("https://test-dev--housh.netlify.app/add/");

    cy.get("*[type='button']").contains("Apartment").click()
    cy.get("button").contains("Next").click();

    cy.get("*[type='button']").contains("An entire accommodation").click()
    cy.get("button").contains("Next").click();

    cy.get("input[id='country']").type("Barcelona");
    cy.get("input[id='provincia']").type("Barcelona");
    cy.get("input[id='ciutat']").type("Barcelona");
    cy.get("input[id='carrer']").type("Barcelona");
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
    cy.get("*[type='button']").contains("Swimming Pool").click()
    cy.get("*[type='button']").contains("Garden").click()
    cy.get("*[type='button']").contains("Billar table").click()
    cy.get("*[type='button']").contains("GYM").click()
    cy.get("*[type='button']").contains("Spacious").click()
    cy.get("*[type='button']").contains("Dishwasher").click()
    cy.get("*[type='button']").contains("Central").click()
    cy.get("*[type='button']").contains("Quite").click()
    cy.get("*[type='button']").contains("Alarm").click()
    cy.get("*[type='button']").contains("Smoke detector").click()
    cy.get("*[type='button']").contains("Health kit").click()

    cy.get("button").contains("Next").click();
    //images
    cy.get("input[type='file']").selectFile('C:/Users/couce/PycharmProjects/Frontend/cypress/fixtures/fotocasa.jpg')
    cy.get("button").contains("Next").click();
    cy.get("textarea").type("Cypress Test House");
    cy.get("button").contains("Next").click();
    cy.get("textarea").type("Cypress Test House");
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Back").click();
    cy.get("textarea").type("Cypress Test House");
    cy.get("button").contains("Next").click();
    cy.get("[role=button]").contains("+").click().click();
    cy.get("[role=button]").contains("-").click();
    cy.get("input[type='text']").clear().type("200");

    cy.get("button[type='submit']").click();

    cy.wait(5000);
    cy.get("button[type='button']").contains("Go to house").click();
    cy.wait(5000)
    cy.contains("Cypress Test House")
  });
});