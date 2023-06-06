import BasePage from "./Base.page";

class LoginPage extends BasePage{
    static get url(){
        return "/profile.php#login";
    }

    static get usernameField(){
        return cy.get("#txt-username");
    }

    static get passwordField(){
        return cy.get("#txt-password");
    }

    static get loginButton(){
        return cy.get("#btn-login");
    }
}

export default LoginPage;