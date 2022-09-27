Feature: Header component

  Scenario: Show default header
    When rendering header component with text "NEW ANNOUNCEMENT"
    Then the header has classes "fq-base fq-text-4xl fq-font-bold fq-pt-6 fq-pb-3"
    And the header has text "NEW ANNOUNCEMENT"
