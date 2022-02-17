Feature: List component

  Scenario: Show default list
    When rendering list component with content from file "listData1.json"
    Then the list has text "Lorem ipsum"
