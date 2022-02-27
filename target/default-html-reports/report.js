$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login Function with Cucumber (Sezai)",
  "description": "back",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "AC4 Validate whether the leading and trailing spaces entered into the Username field are trimmed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AC4"
    }
  ]
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "login with \"    \u003cusertype\u003e     \" credentials",
  "keyword": "Then "
});
formatter.step({
  "name": "The \"\u003cpage\u003e\" should be opened",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usertype",
        "page"
      ]
    },
    {
      "cells": [
        "user1",
        "Quick Launchpad"
      ]
    },
    {
      "cells": [
        "salesmanager105",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "storemanager75",
        "Dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "AC4 Validate whether the leading and trailing spaces entered into the Username field are trimmed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AC4"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "login with \"    user1     \" credentials",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The \"Quick Launchpad\" should be opened",
  "keyword": "And "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_should_be_opened(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "AC4 Validate whether the leading and trailing spaces entered into the Username field are trimmed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AC4"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "login with \"    salesmanager105     \" credentials",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The \"Dashboard\" should be opened",
  "keyword": "And "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_should_be_opened(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "AC4 Validate whether the leading and trailing spaces entered into the Username field are trimmed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AC4"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "login with \"    storemanager75     \" credentials",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The \"Dashboard\" should be opened",
  "keyword": "And "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_should_be_opened(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});