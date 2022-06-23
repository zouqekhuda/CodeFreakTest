//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper'

import styles from './styles';
// create a component
const ScreenOne = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('ScreenTwo')
    }
    return (
        <View style={styles.container}>
            <View style={styles.profileDetailsContainer} >
                <View style={styles.detailsMainContainer} >
                    <View style={styles.imageContainer} >
                        <Image
                            source={require('../../assets/profile.png')}
                            style={styles.imageStyles}
                        />
                    </View>
                    <View style={styles.textContainer} >
                        <Text style={styles.helloText} >
                            Hello
                        </Text>
                        <Text style={styles.userNameText}>
                            Elon Musk
                        </Text>
                    </View>
                </View>
                <View style={styles.balanceDetailsContainer} >
                    <View style={styles.textContainer} >
                        <Text style={styles.helloText} >
                            Your Balance
                        </Text>
                        <Text style={styles.userNameText}>
                            $25, 000
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.earningDonationContainer} >
                <TouchableOpacity style={[styles.typeContainer, { marginHorizontal: '10%', width: '30%' }]} >
                    <Text style={{ fontSize: 16, color: 'black' }} >
                        Earnings
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.typeContainer, { borderBottomWidth: 0 }]} >
                    <Text>
                        Donations
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <BarChart
                    style={{ height: 200, width: '100%', marginTop: 10 }}
                    data={{
                        dataSets: [{
                            label: 'test',
                            values: [
                                { y: 1 }, { y: 2 }, { y: 1 },
                                { y: 1 }, { y: 2 }, { y: 1 },
                                { y: 1 }, { y: 2 }, { y: 1 },
                            ]
                        }]
                    }}
                />
            </View>

            <View style={styles.dateContainer} >
                <TouchableOpacity style={styles.selectedType} >
                    <Text style={styles.selectedText} >
                        Week
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.unselectedType}>
                    <Text>
                        Month
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.unselectedType}>
                    <Text>
                        Year
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.detailsMainContainer, styles.transactionContainer]} >
                <View style={[styles.imageContainer, { width: '16%' }]} >
                    <Image
                        source={require('../../assets/profile.png')}
                        style={styles.imageStyles}
                    />
                </View>
                <View style={{ marginLeft: 10 }} >
                    <Text style={[styles.userNameText, { fontSize: 18 }]}>
                        You have received $200
                    </Text>
                    <Text style={[styles.helloText, { fontSize: 12 }]} >
                        Thu, Dec 11, 2021 2:53 AM
                    </Text>
                </View>
                <View>
                    <Text style={styles.blueText} >
                        + $175.00
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default ScreenOne;
