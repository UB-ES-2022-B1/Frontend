describe("get-favourites", () => {
    beforeEach(() => {
    // runs before each test in the block
    cy.clearCookies();
    cy.visit("https://test-dev--housh.netlify.app");
  })

  it("get info", function () {
    cy.visit("https://test-dev--housh.netlify.app/login/");
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Home").click();
    cy.wait(2000)
    cy.get("*[class='heart']").first().should("have.attr", "fill").and("eq", "#1a1b1b");
    cy.get("*[class='heart']").first().click();
    cy.get("*[class='heart']").first().should("have.attr", "fill").and("eq", "red");
    cy.get("*[class='dropdown_activator']").click()
    cy.get("*[class='item_list']").children().contains("Favourites").click({force:true});
    cy.get("*[tabindex='-1']").should("exist");
  });
});