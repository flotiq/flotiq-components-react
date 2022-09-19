Feature: Announcement component

  Scenario: Show default announcement
    When rendering announcement component with text "NEW ANNOUNCEMENT"
    Then the announcement has classes "fq-bg-primary fq-text-white"
    And the announcement has text "NEW ANNOUNCEMENT"
