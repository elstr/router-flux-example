import React from 'react';
import {PropTypes} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import { Actions } from 'react-native-router-flux';

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const TabView = props => {
return (
  <View style={[styles.container, props.sceneStyle ]}>
    <Text>Tab {props.title}</Text>
    {props.name === 'tab1_1' &&
      <Button onPress={Actions.tab1_2} title='Animated sub navigation'/>
    }
    {props.name === 'tab2_1' &&
      <Button onPress={Actions.tab2_2} title='Sub navigation'/>
    }

    <Button onPress={() => { Actions.tab1(); }} title='Change to tab1' />
    <Button onPress={() => { Actions.tab2(); }} title='Change to tab2' />
    <Button onPress={() => { Actions.tab3(); }} title='Change to tab3' />
    
    <Button onPress={() => { Actions.about(); }} title='push to about' />
    <Button onPress={() => { Actions.scene2(); }} title='Go to Scene 2' />

  </View>
);
};

TabView.propTypes = propTypes;

export default TabView;
