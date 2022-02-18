Feature: Delimiter component

  Scenario: Show default delimiter
    When rendering delimiter component
    Then the delimiter has classes "border-primary"
