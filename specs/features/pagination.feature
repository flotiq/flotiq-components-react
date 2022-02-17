Feature: Pagination component

  Scenario: Show default pagination
    When rendering pagination component with page number 1 and number of pages 10
    Then the pagination nav element has 6 children
