Feature: YouTubeEmbed component

  Scenario: Show default youtube embed
    When rendering youtube component with url "https://www.youtube.com/watch?v=w0JFqbDgKVQ"
    Then the youtube has src "https://www.youtube.com/embed/w0JFqbDgKVQ"

  Scenario: Show default youtube embed with youtu.be link
    When rendering youtube component with url "https://youtu.be/w0JFqbDgKVQ"
    Then the youtube has src "https://www.youtube.com/embed/w0JFqbDgKVQ"
