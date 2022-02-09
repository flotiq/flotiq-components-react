Feature: Announcement component

  Scenario: Show default announcement
    When rendering announcement component with text "NEW ANNOUNCEMENT"
    Then the announcement has classes "bg-primary text-white"
    And the announcement has text "NEW ANNOUNCEMENT"
