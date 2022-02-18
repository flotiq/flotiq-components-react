Feature: Paragraph component

  Scenario: Show default paragraph
    When rendering paragraph component with text "NEW ANNOUNCEMENT"
    Then the paragraph has text "NEW ANNOUNCEMENT"
