Feature: test

    Description: Onliner test

    Background: navigate to web site
        Given navigate to web site

    Scenario: Opening sign in page
        When sign in button is clicked
        Then validate that on the sign in page

    Scenario: Signing in
        When sign in button is clicked
        And entered
            | email              | password |
            | eckofeal@gmail.com | xmpqderf |
        And sign in confirmed
        Then validate that loggined in