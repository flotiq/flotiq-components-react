Feature: Button component

  Scenario: Show default button
    When rendering button component with text "CLICK HERE"
    Then the button has classes "bg-primary text-white"
    And the button has text "CLICK HERE"
