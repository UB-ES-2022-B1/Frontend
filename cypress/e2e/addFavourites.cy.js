describe.skip("add-favourites", () => {
    beforeEach(() => {
    // runs before each test in the block
    cy.clearCookies();
    cy.visit("https://test-dev--housh.netlify.app");
  })

  it("add favourite", function () {
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
    cy.get("*[class='heart']").first().click();
  });

  it("add favourite", function () {
    cy.visit("https://test-dev--housh.netlify.app/login/");
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Home").click();
    cy.wait(2000)
    cy.get("img[tabindex='-1']").first().click({force: true});
    cy.get("*[class='heart']").first().should("have.attr", "fill").and("eq", "white");
    cy.get("*[class='heart']").first().click();
    cy.get("*[class='heart']").first().should("have.attr", "fill").and("eq", "red");
    cy.get("*[class='heart']").first().click();
  });
});