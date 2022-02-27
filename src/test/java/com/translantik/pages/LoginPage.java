package com.translantik.pages;

import com.translantik.utilities.ConfigurationReader;
import com.translantik.utilities.Driver;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {



    public LoginPage(){
        PageFactory.initElements(Driver.get(),this);
    }
    @FindBy(id= "prependedInput")
    public WebElement userName;
    @FindBy(id="prependedInput2")
    public WebElement Password;
    @FindBy(id="_submit")
    public WebElement LoginButton;

    public static void waitUntilLoaderScreenDisappear() {
    }

    public void AsUser(String usertype){
        if(usertype.equals("driver")){
            new LoginPage().userName.sendKeys(ConfigurationReader.get("driver_username"));
            new LoginPage().Password.sendKeys(ConfigurationReader.get("driver_password"));
        }else if(usertype.equals("sales manager")){
            new LoginPage().userName.sendKeys(ConfigurationReader.get("sales_manager_username"));
            new LoginPage().Password.sendKeys(ConfigurationReader.get("sales_manager_password"));
        }else if(usertype.equals("store manager")){
            new LoginPage().userName.sendKeys(ConfigurationReader.get("store_manager_username"));
            new LoginPage().Password.sendKeys(ConfigurationReader.get("store_manager_password"));
        }
        new LoginPage().LoginButton.click();
    }

}



