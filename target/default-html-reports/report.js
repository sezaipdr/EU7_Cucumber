$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login Function with Cucumber Sezai",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the Password is not visible in the Page Source",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AC8"
    },
    {
      "name": "@TRANS-1190"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"dummypassword\" in to Password input",
  "keyword": "When "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.theUserEntersInToPasswordInput(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The \"dummypassword\" shouldn\u0027t be visible in the Page Source",
  "keyword": "Then "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.theShouldnTBeVisibleInThePageSource(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});