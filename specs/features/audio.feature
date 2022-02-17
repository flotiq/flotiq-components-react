Feature: Audio component

  Scenario: Shows audio component with correct file
    When rendering audio component with url "https://api.flotiq.com/image/0x0/_media-4e30edc8-d1b5-45a1-842a-80f5e8467121.mp3" and extension "mp3"
    Then the source has type equal to "audio/mp3"
    And the source has url equal to "https://api.flotiq.com/image/0x0/_media-4e30edc8-d1b5-45a1-842a-80f5e8467121.mp3"

