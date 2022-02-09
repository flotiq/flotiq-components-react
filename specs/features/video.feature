Feature: Video component

  Scenario: Show default video
    When rendering video component with url "https://api.flotiq.com/image/0x0/_media-768b6c18-5bf4-44aa-8361-3ef6045dc4b4.mp4" and extension "mp4"
    Then the video has src "https://api.flotiq.com/image/0x0/_media-768b6c18-5bf4-44aa-8361-3ef6045dc4b4.mp4"
