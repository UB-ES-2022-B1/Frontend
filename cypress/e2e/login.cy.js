describe("Login and Logout", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app/login/");
        cy.clearCookies()
  })
  it("Can login through the UI", function () {
    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Sign out").should("exist").click();
  });
});

describe("Login after 4 attempts", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app/login/");
        cy.clearCookies()
  })
  it("4 bad attempts", function () {

    cy.get("input[type='email']").type("cypress@cypressauto.com");
    cy.get("input[type='password']").type("falso");
    cy.get("form").submit();

    cy.get("*[role='alert']").should("exist").contains("Wrong password")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("falso");
    cy.get("form").submit();

    cy.get("*[role='alert']").should("exist").contains("Wrong password")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("falso");
    cy.get("form").submit();

    cy.get("*[role='alert']").should("exist").contains("Wrong password")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("falso");
    cy.get("form").submit();

    cy.get("*[role='alert']").should("exist").contains("Wrong password")

    cy.get("input[type='email']").clear().type("cypress@cypressauto.com");
    cy.get("input[type='password']").clear().type("CypressTesting$1");
    cy.get("form").submit();
    cy.wait(5000)
    cy.get("button[type='button']").contains("Sign out").should("exist").click();
  });
});

describe("Login with Bad Name", () => {
    beforeEach(() => {
    // runs before each test in the block
        cy.visit("https://test-dev--housh.netlify.app/login/");
        cy.clearCookies()
  })
  it("Try to login with bad name", function () {
    cy.get("input[type='email']").type("falso@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("form").submit();
    cy.get("*[role='alert']").should("exist").contains("User not exists")
  });
});