Feature: Table component

  Scenario: Show default table
    When rendering table component with content from "tableData1.json"
    Then the table has text "lorem"
