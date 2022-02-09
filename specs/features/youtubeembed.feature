Feature: YouTubeEmbed component

  Scenario: Show default youtube embed
    When rendering youtube component with url "https://www.youtube.com/watch?v=w0JFqbDgKVQ"
    Then the youtube has src "https://www.youtube.com/embed/w0JFqbDgKVQ"
