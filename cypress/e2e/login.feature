Feature: Open Google

    Scenario: User opens the Google homepage

        Given the user opens the google homepage

        When the user enter "19311a12c6@sreenidhi.edu.in" and "S@t26-26"

        Then the user click on search bar

        And the URL of the page should be "https://www.google.com/imghp?hl=en&ogbl"


