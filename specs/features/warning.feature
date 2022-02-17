Feature: Warning component

  Scenario: Show default warning
    When rendering warning component with text "NEW ANNOUNCEMENT" and title "TITLE"
    Then the warning has text "NEW ANNOUNCEMENT"
