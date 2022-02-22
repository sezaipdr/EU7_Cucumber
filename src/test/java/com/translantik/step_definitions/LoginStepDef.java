package com.translantik.step_definitions;

import com.translantik.pages.Dashboard;
import com.translantik.pages.LoginPage;
import com.translantik.utilities.ConfigurationReader;
import com.translantik.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDef {
    @Given("The user is on the login page")
    public void the_user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));

    }

    @When("The user login as a {string}")
    public void the_user_login_as_a(String usertype) {
        new LoginPage().AsUser(usertype);
    }

    @Then("The {string} should be opened")
    public void the_should_be_opened(String expectedPage) {
    String actualPage = new Dashboard().pageName.getText();
        Assert.assertEquals(actualPage,expectedPage);
    }
    @Then("Copy the URL and logout and paste URL again")
    public void copy_the_URL_and_logout_and_paste_URL_again() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("Validate the system shopukdn't allow to the user to login")
    public void validate_the_system_shopukdn_t_allow_to_the_user_to_login() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}
