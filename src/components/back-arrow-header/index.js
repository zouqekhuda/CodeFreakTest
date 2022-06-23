//import liraries
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

// create a component
const BackArrowHeader = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/back_button.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 20
    }
});

//make this component available to the app
export default BackArrowHeader;
