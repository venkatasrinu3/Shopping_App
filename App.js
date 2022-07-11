import React from "react";
import { View, Text, StyleSheet, Image, } from 'react-native';
import { Provider } from "react-redux";
import AppNavigation from "./src/screens/AppNavigation";
import store from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App