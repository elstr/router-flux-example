import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';


import TabView from './components/TabView';
import TabIcon from './components/TabIcon';
import About from './components/About';
import Launch from './components/Launch';
import Scene2 from './components/Scene2';
import Scene3 from './components/Scene3';

export default class tabsExample extends Component {
  render() {
    return (
      <Router>
          <Scene key="launch" component={Launch} title="Launch" initial />

          <Scene
            key="main"
            tabs
            tabBarStyle={styles.tabBarStyle}
            tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
           >

            <Scene
              key="tab1"
              title="Tab #1"
              icon={TabIcon}
              navigationBarStyle={{ backgroundColor: '#8AC24A' }}
              titleStyle={{ color: 'black' }}
             >
                <Scene
                  key="tab1_1"
                  component={TabView}
                  title="Tab #1_1"
                  onRight={() => alert('Right button')}
                  rightTitle="Right"
                />
                <Scene
                  key="tab1_2"
                  component={TabView}
                  title="Tab #1_2"
                  titleStyle={{ color: 'black' }}
                />
            </Scene>

            <Scene key="tab2" initial title="Tab #2" icon={TabIcon}>
                <Scene
                  key="tab2_1"
                  component={TabView}
                  title="Tab #2_1"
                  renderRightButton={() => <Text>Right</Text>}
                />
                <Scene
                  key="tab2_2"
                  component={TabView}
                  title="Tab #2_2"
                  hideBackImage
                  onBack={() => alert('Left button!')}
                  backTitle="Left"
                  duration={1}
                />
            </Scene>



            <Scene key="tab3" component={TabView} title="Tab #3"  icon={TabIcon} />
            <Scene key="tab4" component={TabView} title="Tab #4" hideNavBar icon={TabIcon} />
            <Scene key="tab5" component={TabView} title="Tab #5"  icon={TabIcon} />
          </Scene>

          <Scene key="about" component={About} title="About" />
          <Scene key="scene2" component={Scene2} title="Scene 2" />
          <Scene key="scene3" component={Scene3} title="Scene 3" />
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

AppRegistry.registerComponent('tabsExample', () => tabsExample);
