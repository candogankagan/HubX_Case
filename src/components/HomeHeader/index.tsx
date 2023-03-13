import React, {useState} from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import {styles} from './style';

const HomeHeader = () => {
    const [text, onChangeText] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Hi, plant lover</Text>
            <Text style={styles.headerSecondText}>Good Afternoon! ⛅</Text>
            <View style={styles.inputContainer}>
                <Image source={require('../../assets/icons/searchIcon.png')} />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholderTextColor={'#AFAFAF'}
                    placeholder={'Search for plants'}
                />
            </View>
            <Image style={styles.imageBackground} source={require('../../assets/images/leafRight.png')} />
            <Image style={styles.imageBackground} source={require('../../assets/images/leafLeft.png')} />
        </View>
    );
};

export default HomeHeader;
