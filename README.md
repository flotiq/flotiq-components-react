# Flotiq components for React

This project uses eslint. This project do not have React app to start, it only has storybook part.
The build storybook is available on [https://flotiq.github.io/flotiq-components-react/](https://flotiq.github.io/flotiq-components-react)

## Available Scripts

In the project directory, you can run:

### `yarn install`

To install all dependencies. Please DO NOT use npm for that.

### `yarn storybook`

To start storybook server. It will be available on [http://localhost:6006/](http://localhost:6006/)

### `yarn compile`

To compile components into dist directory and prepare them for publish on npm registry.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Usage

```
Caution!
This project is in development stage. The below steps could change.
```

To include this library in your own project you should follow these steps.

### 1. Add module

Add Flotiq Components module
```
npm install https://github.com/flotiq/flotiq-components-react.git
```

### 2a. Include component styles (Projects using Tailwind)

To use Tailwind benefits include Flotiq Components to your `tailwind.config.js`

```js
module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}', // Flotiq Components location
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {}, // Your theme overrides
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    plugins: [],
    // Below configuration is required if you use the Cards component
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
```

Tip: You can also reduce the `safelist` by replacing it with the array of classes that you use before pushing the code for production.

### 2b. Include component styles (Projects without TailwindCSS)

You can use Flotiq Components without Tailwind. Just import stylesheets from Flotiq Component.

If you are using Sass the following line can be included in a src/App.scss
```
@import '~flotiq-components-react/dist/index-including-tailwind.css';
```

If using css the following line can be included in your src/index.js or App.js file
```
import 'flotiq-components-react/dist/index-including-tailwind.css';
```


### 3. Use components in your code

```
import { Button } from 'flotiq-components-react';
//...
<Button label="Hello Component!"/>
```

## NPM publish

To publish a new package in NPM, you need to update the version in the packages.json and packages-lock.json files and then commit the changes with the message "Release x.y.z".
Where x.y.z is the new version of the package.
Commit about this on the master branch will start building a tag about this version and publishing a new version to npm.



