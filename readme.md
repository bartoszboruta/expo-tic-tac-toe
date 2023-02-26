# Tic-Tac-Toe in Expo

This project is a recreation of a React web application from new [react beta docs](https://beta.reactjs.org/learn/tutorial-tic-tac-toe) for use on mobile devices using React Native with Expo.

This project was inspired by a tweet from [@mattcarrollcode](https://twitter.com/mattcarrollcode/status/1629262255744503809?s=46&t=ArQ2YykoGCclA2p0py4niw), in which he shared his inaugural project in [@reactjs](https://twitter.com/reactjs)


<p align="center">
  <video src="https://user-images.githubusercontent.com/17254885/221388108-83e97808-5b96-473d-b108-afa05c442522.mp4" height="640">
</p>

## Diffs between React and React Native

### Square component
To use Square component diffs in React Native, switch your web button tag to the [Pressable component](https://reactnative.dev/docs/pressable) and wrap text in a [Text component](https://reactnative.dev/docs/text). Note that all text in React Native needs to be wrapped in <Text> tags.

<p align="center">
  <img src="https://user-images.githubusercontent.com/17254885/221440271-1484fe50-c7d2-4d8d-9c8d-a55eb1fc8cd0.png">
</p>


### Board component
To convert a Board component from web to React Native, simply replace the div tag with the [View component](https://reactnative.dev/docs/view), and ensure that any text is wrapped in a Text component.

<p align="center">
  <img src="https://user-images.githubusercontent.com/17254885/221440263-12ad91c2-92bf-4079-9b82-358a34a00de9.png">
</p>

### Game component
For the last Game component, note that there are no `li` or `ol` components in React Native. Instead, use the View component to wrap any list items, replace the button tag with Pressable, and ensure that any text values are enclosed within a Text component.

<p align="center">
  <img src="https://user-images.githubusercontent.com/17254885/221440267-c9326c10-33b9-4df7-9be4-6ae099344746.png">
</p>

React Native offers list components like [ScrollView](https://reactnative.dev/docs/using-a-scrollview) and [FlatList/SectionList](https://reactnative.dev/docs/using-a-listview). In my example, View was used since the list items always fit within the content.

### Styles
In the last difference, the styles are defined using StyleSheet, which is a built-in CSS-in-JS solution in React Native, rather than using classNames like in web development.

<p align="center">
  <img src="https://user-images.githubusercontent.com/17254885/221440273-01a23851-ba24-4ce7-9faf-b2ae7d0d1f0b.png">
</p>

## Prerequisites

Before running this project, ensure that you have the following installed:

- Node.js
- Expo CLI

## Getting Started

To get started, first clone the repository to your local machine:
```git clone git@github.com:bartoszboruta/expo-tic-tac-toe.git```

Then navigate to the project directory:
```cd expo-tic-tac-toe```

Next, install the project dependencies:

```npm install```

Finally, start the Expo development server:

```npx expo start```

This will open a new tab in your web browser with the Expo Developer Tools, which allow you to run the application in a simulator or on a physical device or in the browser.

The `App.tsx` file is the main entry point for the application. The `app.json` file contains configuration settings for the Expo project. The `assets` directory contains fonts and images used in the application. The `components` directory contains reusable components used throughout the application. The `screens` directory contains the screens for the application, which are navigated using the React Navigation library.

## Dependencies

This project relies on the following dependencies:

- React
- React Native
- Expo
- React Native Web

These dependencies are listed in the `package.json` file, along with their respective versions.

## Credits

This project was created by [bartoszboruta](https://github.com/bartoszboruta)

## License

This project is licensed under the MIT License. See the LICENSE file for more information.


