import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";

export default class Launch extends React.Component {
  render(){
    return (
      <View {...this.props}  style={styles.container}>
        <Text>Launch page</Text>
        <Button onPress={Actions.main} title='Go to TabBar' />
        <Button onPress={Actions.scene3} title='Go to Scene 3' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  }
});
