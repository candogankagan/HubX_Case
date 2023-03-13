import React from 'react';
import {View, Text, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigators/application.navigator';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import {styles} from './styles';

interface Props {
    navigation: NativeStackNavigationProp<OnboardingStackParamList, 'OnboardingSecond'>;
}

const OnboardingSecondScreen = ({navigation}: Props) => {
    const onContinuePressed = () => {
        navigation.navigate('Paywall');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Get plant <Text style={styles.headerNestedText}>care guides</Text>
            </Text>
            <Image style={styles.imageBackground} source={require('../../assets/images/leaf.png')} />
            <Image
                resizeMode="contain"
                source={require('../../assets/images/flatPhone.png')}
                style={styles.imageMobile}
            />
            <Image style={styles.imageArtwork} source={require('../../assets/images/artwork.png')} />
            <View style={styles.buttonViewContainer}>
                <Button
                    onPress={onContinuePressed}
                    title={'Continue'}
                    styleOverrides={{
                        container: styles.buttonContainer,
                        title: styles.buttonTitle,
                    }}
                />
            </View>
            <Slider step={2} />
        </View>
    );
};

export default OnboardingSecondScreen;
