package com.translantik.pages;

import com.translantik.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class  BasePage {


    public BasePage (){

        PageFactory.initElements(Driver.get(), this);

    }
    @FindBy(className = "oro-subtitle")
    public WebElement pageName;

    @FindBy(xpath = "//*[@id='user-menu']/a")
    public WebElement selfName;

    @FindBy(linkText = "Logout")
    public WebElement LogoutB;

}