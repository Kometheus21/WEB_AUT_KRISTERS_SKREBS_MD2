import BasePage from "./Base.page";

class AppointmentSummaryPage extends BasePage{
    static get url(){
        return "/appointment.php#summary";
    }

    static get facilityField(){
        return cy.get("#facility");
    }

    static get applyForReadmissionField(){
        return cy.get("#hospital_readmission");
    }

    static get healthcareProgramField(){
        return cy.get("#program");
    }

    static get visitDateField(){
        return cy.get("#visit_date");
    }

    static get commentField(){
        return cy.get("#comment");
    }
}

export default AppointmentSummaryPage;