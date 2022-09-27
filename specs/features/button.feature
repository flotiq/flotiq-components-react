Feature: Button component

  Scenario: Show default button
    When rendering button component with text "CLICK HERE"
    Then the button has classes "fq-bg-primary fq-text-white"
    And the button has text "CLICK HERE"
