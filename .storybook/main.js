module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  "staticDirs": [
      "./images",
      "../src/stories/assets"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],

  "framework": "@storybook/react-webpack5",

  "core": {
    "builder": "webpack5"
  },

  docs: {}
}
