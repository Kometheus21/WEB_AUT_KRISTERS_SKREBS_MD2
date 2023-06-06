import AppointmentPage from "../pageObjects/Appointment.page";
import AppointmentSummaryPage from "../pageObjects/AppointmentSummary.page";
import BasePage from "../pageObjects/Base.page";
import HistoryPage from "../pageObjects/History.page";
import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("CuraHealthcareService spec", () => {
  context("Make an appointment", () => {
    beforeEach(() => {
      BasePage.visit();
    });

    it("testCase1", () =>{
      HomePage.makeAppointmentButton.click();
      LoginPage.usernameField.type("John Doe");
      LoginPage.passwordField.type("ThisIsNotAPassword");
      LoginPage.loginButton.click();
      AppointmentPage.facilityMenu.select("Seoul CURA Healthcare Center");
      AppointmentPage.applyForReadmissionCheck.click();
      AppointmentPage.mediciadRadio.click();
      AppointmentPage.visitDateMenu.click();
      AppointmentPage.dateButtons.contains("30").click();
      AppointmentPage.appointmentArea.click("right");
      AppointmentPage.commentField.type("CURA Healthcare Service");
      AppointmentPage.bookAppointmentButton.click();
      AppointmentSummaryPage.facilityField.should("have.text", "Seoul CURA Healthcare Center");
      AppointmentSummaryPage.applyForReadmissionField.should("have.text", "Yes");
      AppointmentSummaryPage.healthcareProgramField.should("have.text", "Medicaid");
      AppointmentSummaryPage.visitDateField.should("have.text", "30/05/2023");
      AppointmentSummaryPage.commentField.should("have.text", "CURA Healthcare Service");
    });

  });
  context("Appointment history empty", () => {
    beforeEach(() => {
      BasePage.visit();
    });

    it("testCase1", () =>{
      HomePage.makeAppointmentButton.click();
      LoginPage.usernameField.type("John Doe");
      LoginPage.passwordField.type("ThisIsNotAPassword");
      LoginPage.loginButton.click();
      BasePage.menuButton.click();
      BasePage.menuSideBar.should("have.class", "active");
      BasePage.historyButton.click()
      HistoryPage.historyField.should("have.text", "No appointment.")
    });
  });
});