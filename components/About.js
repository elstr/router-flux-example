import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";

export default class About extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Small example of tab navigation with React Native Router Flux</Text>
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

    instructions: {
        alignItems: 'center',
        fontSize: 20,
        fontWeight: '700',
        textAlign: "center",
        justifyContent: 'center',
        marginBottom: 5,
    },
});
