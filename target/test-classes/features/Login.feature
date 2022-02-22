Feature: Login Function with Cucumber (Sezai)

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
    Scenario Outline:
      Given  The user is on the login page
      When  The user login as a "<usertype>"
      Then The "<page>" should be opened
      And Copy the URL and logout and paste URL again
      Then Validate the system shopukdn't allow to the user to login
      Examples:
        | usertype      | page            |
        | driver        | Quick Launchpad |
        | store manager | Dashboard       |
        | sales manager | Dashboard       |