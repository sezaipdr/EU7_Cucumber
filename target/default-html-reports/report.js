$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login Function with Cucumber (Sezai)",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AC2"
    },
    {
      "name": "@TRANS-1112"
    }
  ]
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user login as a \"\u003cusertype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The \"\u003cpage\u003e\" should be opened",
  "keyword": "Then "
});
formatter.step({
  "name": "Copy the URL and logout and paste URL again",
  "keyword": "And "
});
formatter.step({
  "name": "Validate the system shopukdn\u0027t allow to the user to login",
  "keyword": "Then "
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
        "driver",
        "Quick Launchpad"
      ]
    },
    {
      "cells": [
        "store manager",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AC2"
    },
    {
      "name": "@TRANS-1112"
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
  "name": "The user login as a \"driver\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"Quick Launchpad\" should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_should_be_opened(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Copy the URL and logout and paste URL again",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate the system shopukdn\u0027t allow to the user to login",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AC2"
    },
    {
      "name": "@TRANS-1112"
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
  "name": "The user login as a \"store manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"Dashboard\" should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_should_be_opened(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Copy the URL and logout and paste URL again",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate the system shopukdn\u0027t allow to the user to login",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AC2"
    },
    {
      "name": "@TRANS-1112"
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
  "name": "The user login as a \"sales manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"Dashboard\" should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "com.translantik.step_definitions.LoginStepDef.the_should_be_opened(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Copy the URL and logout and paste URL again",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate the system shopukdn\u0027t allow to the user to login",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});