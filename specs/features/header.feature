Feature: Header component

  Scenario: Show default header
    When rendering header component with text "NEW ANNOUNCEMENT"
    Then the header has classes "text-4xl font-bold pt-6 pb-3"
    And the header has text "NEW ANNOUNCEMENT"
