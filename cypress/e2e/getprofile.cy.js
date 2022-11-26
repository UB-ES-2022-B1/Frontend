describe("get-profile", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app/profile/");
  })
  it("doesn't get info", function () {
    cy.get("[class='chakra-text css-0']").contains('Legal name').siblings().should((elem) => {
    expect(elem.text()).to.equal('undefined undefined');
    });
  });

  it("get info", function () {
    cy.visit("https://test-dev--housh.netlify.app/login/");
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();

    cy.visit("https://test-dev--housh.netlify.app/profile/");
    cy.get("[class='chakra-text css-0']").contains('Legal name').siblings().should((elem) => {
    expect(elem.text()).to.equal('CypressTestingUser CypressAutotesting');
    });
    cy.get("[class='chakra-text css-0']").contains('Email address').siblings().should((elem) => {
    expect(elem.text()).to.equal('cypress@cypressauto.com');
    });
    cy.get("[class='chakra-text css-0']").contains('Phone number').siblings().should((elem) => {
    expect(elem.text()).to.equal('+37611111');
    });
    cy.get("[class='chakra-text css-0']").contains('Birthday').siblings().should((elem) => {
    expect(elem.text()).to.equal('2000-04-20');
    });
    cy.get("[class='chakra-text css-0']").contains('Country').siblings().should((elem) => {
    expect(elem.text()).to.equal('Andorra');
    });
  });
});