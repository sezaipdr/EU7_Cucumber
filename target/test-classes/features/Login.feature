Feature: Login Function with Cucumber (Sezai)
back
  @AC1 @TRANS-1109
  Scenario Outline: Validate all users can log in with valid credentials
    Given  The user is on the login page
    When  The user login as a "<usertype>"
    Then The "<page>" should be opened
    Examples:
      | usertype      | page            |
      | driver        | Quick Launchpad |
      | store manager | Dashboard       |
      | sales manager | Dashboard       |
    @AC2 @TRANS-1112
     Scenario Outline: Validate the system shouldn't allow users without providing credentials
      Given The user is on the login page
      When The user login as a "<usertype>"
      Then The "<page>" should be opened
      And copy URl and log out and paste URl
      Then validate the system shouldnt allow the user to login
      Examples:
        | usertype      | page            |
        | driver        | Quick Launchpad |
        | store manager | Dashboard       |
        | sales manager | Dashboard       |
      @AC4
      Scenario Outline: AC4 Validate whether the leading and trailing spaces entered into the Username field are trimmed
        Given The user is on the login page
        Then login with "    <usertype>     " credentials
        And The "<page>" should be opened
        Examples:
          | usertype        | page            |
          | user1           | Quick Launchpad |
          | salesmanager105 | Dashboard       |
          | storemanager75  | Dashboard       |
