Feature: Code component

  Scenario: Show default code
    When rendering code component with text "npm run dev"
    Then the code has text "npm run dev"
