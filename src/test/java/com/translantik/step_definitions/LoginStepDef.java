package com.translantik.step_definitions;

import com.translantik.pages.DashboardPage;
import com.translantik.pages.LoginPage;
import com.translantik.utilities.BrowserUtils;
import com.translantik.utilities.ConfigurationReader;
import com.translantik.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;

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

    String actualPage = new DashboardPage().pageName.getText();
        Assert.assertEquals(actualPage,expectedPage);
    }
    @Then("copy URl and log out and paste URl")
    public void copy_URl_and_log_out_and_paste_URl() {
        String currentUrl = Driver.get().getCurrentUrl();
        JavascriptExecutor js= (JavascriptExecutor) Driver.get();
        js.executeScript("arguments[0].click()",new DashboardPage().selfName);
        js.executeScript("arguments[0].click()",new DashboardPage().LogoutB);
        Driver.get().navigate().to(currentUrl);
    }

    @Then("validate the system shouldnt allow the user to login")
    public void validate_the_system_shouldnt_allow_the_user_to_login() {
        Assert.assertEquals("https://qa.translantik.com/user/login",Driver.get().getCurrentUrl());
    }

}
