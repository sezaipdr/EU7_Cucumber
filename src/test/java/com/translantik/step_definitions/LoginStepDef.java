package com.translantik.step_definitions;

import com.translantik.pages.DashboardPage;
import com.translantik.pages.LoginPage;
import com.translantik.utilities.BrowserUtils;
import com.translantik.utilities.ConfigurationReader;
import com.translantik.utilities.Driver;
import io.cucumber.java.en.And;
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


   





    @When("The user enter valid {string} to Username box")
    public void theUserEnterValidToUsernameBox(String arg0) {
        
    }

    @Then("The user hits the Enter key on the keybord")
    public void theUserHitsTheEnterKeyOnTheKeybord() {
        
    }

    @When("The user enter valid {string} to Password box")
    public void theUserEnterValidToPasswordBox(String arg0) {
        
    }

    @Then("LOG IN button gets clicked")
    public void logINButtonGetsClicked() {
        
    }

    @And("The {string} should be displayed")
    public void theShouldBeDisplayed(String arg0) {
        
    }

    @Then("The user hits the {string} key on the keybord")
    public void theUserHitsTheKeyOnTheKeybord(String arg0) {
    }


    @When("The Remember me on this computer link should be seen")
    public void theRememberMeOnThisComputerLinkShouldBeSeen() {
        Assert.assertTrue( new LoginPage().RememberB.isDisplayed());

    }


    @Then("Validate that the Remember me on this computer link should be clickable")
    public void validateThatTheRememberMeOnThisComputerLinkShouldBeClickable() {
       Assert.assertTrue(BrowserUtils.waitForClickablility(new LoginPage().RememberB,3)!=null);
    }

    @When("The user enters {string} in to Password input")
    public void theUserEntersInToPasswordInput(String asdfg) {
        new LoginPage().Password.sendKeys(asdfg);
    }


    @Then("The {string} shouldn't be visible in the Page Source")
    public void theShouldnTBeVisibleInThePageSource(String asdfg) {
        String pageSource=Driver.get().getPageSource();
        Assert.assertFalse(pageSource.contains(asdfg));
    }
}
