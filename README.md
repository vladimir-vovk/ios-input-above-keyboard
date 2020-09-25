# The iOS Text Input above the Keyboard Example

An example of using React Native [InputAccessoryView](https://facebook.github.io/react-native/docs/inputaccessoryview).

The InputAccessoryView is a component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.


This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a TextInput with the `InputAccessoryView` component, and don't set a `nativeID`. 


<img src="./screen.gif" width="300"></img>

## Installation

1. Clone the repo
2. Change directory to the app: `cd ios-input-above-keyboard`
3. Install all dependencies: `yarn install`
4. Run the app: `yarn start`

## Expo

You can also run this app with [Expo](https://exp.host/@vladimir_vovk/ios-input-above-keyboard).
