import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";

const testUser = {
  firstName: "DeleteMe",
  lastName: "TestUser",
  email: "deleteme.testuser@example.com",
  password: "Test1234!"
};

describe("Registration Positive", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  after(() => {
    cy.login();
    cy.visit("/dashboard/user/list");

    dashboardPage.userInput.type(testUser.firstName);
    dashboardPage.userSandwitchBtn.click();
    dashboardPage.userDeleteBtn.click();
    cy.get("body").should(
      "not.contain",
      `${testUser.firstName} ${testUser.lastName}`
    );
  });

  it("Should register new account and delete it", () => {
    homePage.registrationBtn.click();

    registrationPage.registration(
      testUser.firstName,
      testUser.lastName,
      testUser.email,
      testUser.password
    );

    registrationPage.registrationButton;

    dashboardPage
      .getFakeUser(testUser.firstName, testUser.lastName)
      .should("be.visible");
  });
});
