describe("Register acc", () => {

  it("Can Register through the UI", function () {
    cy.visit("https://test-dev--housh.netlify.app/register/");
    cy.get("input[id='field-:Rdaqu6:']").type("CypressTestingUser");
    cy.get("input[id='field-:Rlaqu6:']").type("CypressTesting");
    cy.get("input[id='field-:Rtaqu6:']").type("11111");
    cy.get("input[id='field-:R15aqu6:']").type("2000-04-20")
    cy.get("input[type='email']").type("cypress2323@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("input[type='checkbox']").check({force: true});

    cy.get("form").submit();
  });
});