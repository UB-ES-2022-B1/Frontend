describe("get-house", () => {
  beforeEach(() => {
    // runs before each test in the block
    cy.clearCookies();
    cy.visit("https://test-dev--housh.netlify.app");
  })
  it("get house", function () {
    cy.visit("https://test-dev--housh.netlify.app/login/");
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Home").click();
    cy.wait(2000)
    cy.get("img[tabindex='-1']").first().click({force: true})
    cy.url().should("include", "https://test-dev--housh.netlify.app/apartment/")
    cy.get("img[tabindex='-1']").should("exist")
    cy.get("*[class='chakra-text css-1jijfcn']").should("exist")
    cy.get("*[class='css-1u27lgg']").children().children().should('have.class', 'chakra-button css-x66jzz').
    should("exist")
    cy.get("*[aria-label='Compartir']").should("exist")
    cy.get("*[class='heart']").should("exist")
    cy.get("*[class='css-ncfona']").children().children().should("include.text","guests")
    cy.get("*[class='css-ncfona']").children().children().should("include.text","bathrooms")
    cy.get("*[class='css-ncfona']").children().children().should("include.text","beds")
    cy.get("*[class='css-ncfona']").children().children().should("include.text","bedrooms")
    cy.contains("About this space")
    cy.contains("What is in this accommodation?")
    cy.get("div[class='css-1go7o0l']").should("exist")
});
});
