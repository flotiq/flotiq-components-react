Feature: Image component

  Scenario: Show default image
    When rendering image component with url "https://api.flotiq.com/image/0x0/_media-3a62e398-fbe3-46e8-ba5b-05a2690390ae.png"
    Then the image has src "https://api.flotiq.com/image/0x0/_media-3a62e398-fbe3-46e8-ba5b-05a2690390ae.png"
