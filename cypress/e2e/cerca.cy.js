describe("search-house", () => {
  it("search house", function () {
    cy.visit("https://test-dev--housh.netlify.app");
    cy.get("button[type='button']").contains("Destiny").click({force:true});
    cy.get("input[placeholder='Destiny']").type("barcelona", {force: true});
    cy.get("button[type='button']").contains("Travellers").click({force:true});
    cy.get("button[type='button']").contains("+").click().click().click();
    cy.get("button[aria-label='Search']").click();
    cy.wait(5000)
    cy.get("div[class='housecard']").should("exist")
    cy.get("div[class='housecard']").first().children().last().children().first().
    should("include.text", "Barcelona");
    cy.get("div[class='housecard']").first().children().last().children().last().
    children().children().last().should("exist");
  });
});
