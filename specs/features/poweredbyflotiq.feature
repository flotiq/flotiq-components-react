Feature: Powered by Flotiq component

  Scenario: Show default component
    When rendering component
    Then the component has text "Powered by Flotiq"
