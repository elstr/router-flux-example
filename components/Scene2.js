import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";

export default class Scene2 extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>You are in Scene 2 now</Text>
                <Button onPress={Actions.scene3} title='Go to Scene3' />
                <Button onPress={Actions.pop} title='Back' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});
