describe("get-profile", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app/profile/");
  })
  it("doesn't get info", function () {
    cy.get("label").contains('Name: ').should((elem) => {
    expect(elem.text()).to.equal('Name: ');
    });
  });
  it("get info", function () {
    cy.visit("https://test-dev--housh.netlify.app/login/");
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.visit("https://test-dev--housh.netlify.app/profile/");
    cy.get("label").contains('Name: ').should((elem) => {
      expect(elem.text()).to.not.equal('Name: ');
    });
    cy.visit("https://test-dev--housh.netlify.app/login/");
    cy.visit("https://test-dev--housh.netlify.app/profile/");
  });
});