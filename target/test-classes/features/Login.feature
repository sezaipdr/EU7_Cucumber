Feature: Login Function with Cucumber Sezai

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
    Given  The user is on the login page
    When The user login as a "<usertype>"
    Then The "<page>" should be opened
    And copy URl and log out and paste URl
    Then validate the system shouldnt allow the user to login
    Examples:
      | usertype      | page            |
      | driver        | Quick Launchpad |
      | store manager | Dashboard       |
      | sales manager | Dashboard       |
    @AC8 @TRANS-1190
      Scenario: Validate the Password is not visible in the Page Source
      Given The user is on the login page
      When The user enters "dummypassword" in to Password input
      Then The "dummypassword" shouldn't be visible in the Page Source

  @AC11 @TRANS-1189
    Scenario: Validate user can see the "Remember me on this computer" link on the login page and it should be clickable
    Given  The user is on the login page
    When The Remember me on this computer link should be seen
    Then Validate that the Remember me on this computer link should be clickable

  @AC121
  Scenario Outline: Validate to login by using the Keyboard keys
    Given The user is on the login page
    When The user enter valid "<userName>" to Username box
    Then The user hits the Enter key on the keybord
    When The user enter valid "<password>" to Password box
    Then The user hits the Enter key on the keybord
    Then LOG IN button gets clicked
    And  The "<page>" should be displayed

    Examples:
      | userName      | password               | page            |
      | driver        | driver password        | Quick Launchpad |
      | store manager | store manager password | Dashboard       |
      | sales manager | sales manager password | Dashboard       |

  @AC122
  Scenario Outline: Validate to login by using the Keyboard keys
    Given The user is on the login page
    When The user enter valid "<userName>" to Username box
    Then The user hits the "<button>" key on the keybord
    When The user enter valid "<password>" to Password box
    Then The user hits the Enter key on the keybord
    Then LOG IN button gets clicked
    And  The "<page>" should be displayed

    Examples:
      | button | userName      | password               | page            |
      | tab    | driver        | driver password        | Quick Launchpad |
      | tab    | store manager | store manager password | Dashboard       |
      | tab    | sales manager | sales manager password | Dashboard       |


