describe("rent-house", () => {
  beforeEach(() => {
    // runs before each test in the block
    cy.clearCookies();
    cy.visit("https://test-dev--housh.netlify.app");
  })
  it("rent house", function () {
    cy.visit("https://test-dev--housh.netlify.app/login/");
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Home").click();
    cy.wait(2000)
    cy.get("img[tabindex='-1']").first().click({force: true})
    cy.url().should("include", "https://test-dev--housh.netlify.app/apartment/")
    cy.wait(2000)
    cy.get("*[class='chakra-text css-dw5ttn']").contains("Arrival").siblings().type("2023-12-16");
    cy.get("*[class='chakra-text css-dw5ttn']").contains("Departure").siblings().type("2023-12-17");
    cy.get("button[type='button']").contains("Reserve").click({force:true})
    cy.wait(2000)
    cy.get("input[placeholder='Card number']").type("1234123412341234");
    cy.get("input[placeholder='Expiration']").type("0125");
    cy.get("input[placeholder='CVV']").type("123");
    cy.get("button").contains("Send a reservation request").click();
    cy.wait(4000);
    cy.get("button").contains("Home").click();
});
});
