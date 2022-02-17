Feature: Quote component

  Scenario: Show default quote
    When rendering quote component with text "NEW ANNOUNCEMENT" and caption "Flotiq"
    Then the quote has classes "border-primary"
    And the quote has text "NEW ANNOUNCEMENT"
