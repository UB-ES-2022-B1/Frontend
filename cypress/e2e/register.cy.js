describe("Register acc", () => {

  it("Can Register through the UI", function () {

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    cy.visit("https://test-dev--housh.netlify.app");
    cy.get("*[class='dropdown_activator']").click()
    cy.get("*[class='item_list']").children().contains("Register").click({force:true})
    cy.url().should('eq', 'https://test-dev--housh.netlify.app/register/')

    cy.get("input[id='field-:Rdaiu6:']").type("CypressTestingUser");
    cy.get("input[id='field-:Rlaiu6:']").type("CypressTesting");
    cy.get("select[type='txt']").select("Andorra +376")
    cy.get("input[id='field-:Rtaiu6:']").type("11111");
    cy.get("input[id='field-:R15aiu6:']").type("2000-04-20")
    cy.get("input[type='email']").type( makeid(6) + "@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("input[type='checkbox']").check({force: true});

    cy.get("form").submit();

    cy.wait(5000)
    cy.get("button[type='button']").contains("Home").should("exist").click()
  });
});

describe.skip("Register Fail", () => {

  it("Fail Register through the UI and check if all the requirements are displayed", function () {

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    cy.visit("https://test-dev--housh.netlify.app/register/");
    cy.get("input[id='field-:Rdaiu6:']").type("CypressTestingUser");
    cy.get("input[id='field-:Rlaiu6:']").type("CypressTesting");
    cy.get("select[type='txt']").select("Andorra +376")
    cy.get("input[id='field-:Rtaiu6:']").type("11111");
    cy.get("input[id='field-:R15aiu6:']").type("2000-04-20")
    cy.get("input[type='email']").type( makeid(6) + "@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting1");
    cy.get("input[type='checkbox']").check({force: true});

    cy.get("form").submit();

    cy.get("input[type='password']").parent().siblings().contains("At least one special character");
    cy.get("input[type='password']").clear().type("CypressTesting$");
    cy.get("input[type='password']").parent().siblings().contains("At least one digit");
    cy.get("input[type='password']").clear().type("Cy2$");
    cy.get("input[type='password']").parent().siblings().contains("Minimum 8 characters");
    cy.get("input[type='password']").clear().type("cypresstesting$1");
    cy.get("input[type='password']").parent().siblings().contains("At least one uppercase letter");
    cy.get("input[type='password']").clear().type("CYPRESSTESTING$1");
    cy.get("input[type='password']").parent().siblings().contains("At least one lowercase letter");

    cy.get("input[type='checkbox']").uncheck({force: true});
    cy.get("input[type='checkbox']").parent().siblings().contains("Must accept terms and conditions")

    cy.get("input[type='email']").clear()
    cy.get("input[type='email']").siblings().contains("Email is required")
    cy.get("input[type='email']").type("Cypressmail")
    cy.get("input[type='email']").siblings().contains("Invalid email format")

    cy.get("input[id='field-:R15aiu6:']").clear()
    cy.get("input[id='field-:R15aiu6:']").siblings().contains("Date is required")
    cy.get("input[id='field-:R15aiu6:']").type("3000-04-20")
    cy.get("input[id='field-:R15aiu6:']").siblings().contains("You're not from the future")

    cy.get("input[id='field-:Rtaiu6:']").clear()
    cy.get("input[id='field-:Rtaiu6:']").siblings().contains("Phone is required")
    cy.get("input[id='field-:Rtaiu6:']").type("cypress")
    cy.get("input[id='field-:Rtaiu6:']").siblings().contains("Invalid phone number")

    cy.get("input[id='field-:Rlaiu6:']").clear();
    cy.get("input[id='field-:Rlaiu6:']").siblings().contains("Surname is required")
    cy.get("input[id='field-:Rlaiu6:']").type("09")
    cy.get("input[id='field-:Rlaiu6:']").siblings().contains("Surname is incorrect")

    cy.get("input[id='field-:Rdaiu6:']").clear();
    cy.get("input[id='field-:Rdaiu6:']").siblings().contains("Name is required")
    cy.get("input[id='field-:Rdaiu6:']").type("02")
    cy.get("input[id='field-:Rdaiu6:']").siblings().contains("Name can't contain numbers")
  });
});

describe.skip("Register Fail", () => {

  it("Register with no camps", function () {

    cy.visit("https://test-dev--housh.netlify.app/register/");
    cy.get("button[type='submit']").click();
    cy.get("input[id='field-:Rdaiu6:']").siblings().contains("Name is required")
    cy.get("input[id='field-:Rlaiu6:']").siblings().contains("Surname is required")
    cy.get("input[id='field-:Rtaiu6:']").siblings().contains("Phone is required")
    cy.get("input[id='field-:R15aiu6:']").siblings().contains("Date is required")
    cy.get("input[type='email']").siblings().contains("Email is required")
    cy.get("input[type='checkbox']").parent().siblings().contains("Must accept terms and conditions")
    cy.get("input[type='password']").parent().siblings().contains("Minimum 8 characters");
  });
});

describe.skip("Register fail", () => {

  it("Register of a children", function () {

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    cy.visit("https://test-dev--housh.netlify.app");
    cy.get("*[class='dropdown_activator']").click()
    cy.get("*[class='item_list']").children().contains("Register").click({force:true})
    cy.url().should('eq', 'https://test-dev--housh.netlify.app/register/')

    cy.get("input[id='field-:Rdaiu6:']").type("CypressTestingUser");
    cy.get("input[id='field-:Rlaiu6:']").type("CypressTesting");
    cy.get("select[type='txt']").select("Andorra +376")
    cy.get("input[id='field-:Rtaiu6:']").type("11111");
    cy.get("input[id='field-:R15aiu6:']").type("2020-04-20")
    cy.get("input[type='email']").type( makeid(6) + "@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("input[type='checkbox']").check({force: true});

    cy.get("form").submit();
    cy.get("input[id='field-:R15aiu6:']").siblings().contains("You must be of legal age")
    cy.wait(5000)
  });
});

describe.skip("Register fail", () => {

  it("Register of a existing account", function () {

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    cy.visit("https://test-dev--housh.netlify.app");
    cy.get("*[class='dropdown_activator']").click()
    cy.get("*[class='item_list']").children().contains("Register").click({force:true})
    cy.url().should('eq', 'https://test-dev--housh.netlify.app/register/')

    cy.get("input[id='field-:Rdaiu6:']").type("CypressTestingUser");
    cy.get("input[id='field-:Rlaiu6:']").type("CypressTesting");
    cy.get("select[type='txt']").select("Andorra +376")
    cy.get("input[id='field-:Rtaiu6:']").type("11111");
    cy.get("input[id='field-:R15aiu6:']").type("2000-04-20")
    cy.get("input[type='email']").type( "cypress@cypressauto.com");
    cy.get("input[type='password']").type("CypressTesting$1");
    cy.get("input[type='checkbox']").check({force: true});

    cy.get("form").submit();
    cy.get("*[role='alert']").contains("User already exist!").should("exist")

  });
});