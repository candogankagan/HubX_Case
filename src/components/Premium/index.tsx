import {TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';

const Premium = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style={styles.leftContainer}>
                <Image source={require('../../assets/icons/mailIcon.png')} />
                <View style={styles.textContaimer}>
                    <Text style={styles.headerText}>FREE Premium Available</Text>
                    <Text style={styles.headerDescText}>Tap to upgrade your account!</Text>
                </View>
            </View>
            <Image source={require('../../assets/icons/rightArrowIcon.png')} />
        </TouchableOpacity>
    );
};

export default Premium;
