describe("search-house", () => {
  beforeEach(() => {
    // runs before each test in the block
    cy.clearCookies();
    cy.visit("https://test-dev--housh.netlify.app");
  })
  it("search house", function () {
    cy.visit("https://test-dev--housh.netlify.app/login/");
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Home").click();
    cy.wait(2000)
    cy.get("button[type='button']").contains("Destiny").click({force: true});
    cy.get("input[placeholder='Destiny']").type("Barcelona", {force: true});
    cy.get("button[type='button']").contains("Arrival").click({force: true});
    cy.wait(2000);
    cy.get("input[type='date']").filter(':visible').type("2023-12-13", {force: true});
    cy.get("button[type='button']").contains("Departure").click({force: true});
    cy.wait(2000);
    cy.get("input[type='date']").filter(':visible').type("2023-12-14", {force: true});
    cy.get("button[type='button']").contains("Travellers").click({force: true});
    cy.get("button[type='button']").contains("+").click({force: true}).click({force: true}).click({force: true});
    cy.get("button[aria-label='Search']").click();
    cy.wait(5000)
    cy.get("div[class='housecard']").should("exist")
    cy.get("div[class='housecard']").first().children().last().children().first().should("include.text", "Barcelona");
    cy.get("div[class='housecard']").first().children().last().children().last().children().children().last().should("exist");
  });
  it.skip("search fail house", function () {
    cy.visit("https://test-dev--housh.netlify.app");
    cy.get("button[aria-label='Search']").click();
    cy.get("button[style='color: red;']").contains("Destiny").should("exist");
  });
});
