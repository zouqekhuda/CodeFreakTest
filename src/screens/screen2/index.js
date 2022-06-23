//import liraries
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
// create a component
const ScreenTwo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                <Image
                    source={require('../../assets/profile.png')}
                    style={styles.imageStyles}
                />
                <Image
                    source={require('../../assets/profile.png')}
                    style={styles.imageTwoStyle}
                />
            </View>
            <View>
                <Text style={styles.userNameText}>
                    30 min call with John
                </Text>
                <Text style={{ alignSelf: 'center' }} >
                    Thu, 11 Dec, 2021 2:53 AM
                </Text>
            </View>
            <View style={styles.blueContainer} >
                <Text style={styles.transactionHeader} >
                    Transaction
                </Text>
                <Text style={styles.transactionAmount}>
                    $200.00
                </Text>
                <Text style={styles.transactionDetailText}>
                    You have recived $175.00 form John Doe’s 30 mins call
                </Text>
            </View>
            <View style={styles.transactionDetailContainer} >
                <Text>
                    Transaction Details
                </Text>
                <View style={styles.transactionDetail}>
                    <Text style={styles.headerColor}>
                        Subtotal
                    </Text>
                    <Text style={styles.headerColor}>
                        $200.00
                    </Text>
                </View>
                <View style={styles.transactionDetail}>
                    <Text style={styles.headerColor}>
                        Donation
                    </Text>
                    <Text style={styles.headerColor}>
                        $ -20.00
                    </Text>
                </View>
                <View style={styles.transactionDetail}>
                    <Text style={styles.headerColor}>
                        CareerPaths Fee
                    </Text>
                    <Text style={styles.headerColor}>
                        $ -200.00
                    </Text>
                </View>
                <View style={styles.transactionDetail}>
                    <Text style={[styles.headerColor, { fontSize: 18, fontWeight: '500' }]}>
                        Total Earnings
                    </Text>
                    <Text style={[styles.headerColor, { fontSize: 18, fontWeight: '500' }]}>
                        $135.00
                    </Text>
                </View>
            </View>
        </View>
    );
};



//make this component available to the app
export default ScreenTwo;
