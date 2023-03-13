import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigators/application.navigator';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import {styles} from './style';

interface Props {
    navigation: NativeStackNavigationProp<OnboardingStackParamList, 'Onboarding'>;
}

const OnboardingScreen = ({navigation}: Props) => {
    const onContinuePressed = () => {
        navigation.navigate('OnboardingSecond');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Take a photo to <Text style={styles.headerNestedText}>identify</Text> the plant!
            </Text>
            <Image source={require('../../assets/images/phone.png')} style={styles.image} />
            <Button
                onPress={onContinuePressed}
                title={'Continue'}
                styleOverrides={{
                    container: styles.buttonContainer,
                    title: styles.buttonTitle,
                }}
            />
            <Slider step={1} />
        </View>
    );
};

export default OnboardingScreen;
