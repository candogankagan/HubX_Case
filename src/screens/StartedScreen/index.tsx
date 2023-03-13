import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/Button';
import {OnboardingStackParamList} from '../../navigators/application.navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './style';

interface Props {
    navigation: NativeStackNavigationProp<OnboardingStackParamList, 'Started'>;
}

function StartedScreen({navigation}: Props) {
    const onGetStartedPressed = () => {
        navigation.navigate('Onboarding');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to <Text style={styles.headerNestedText}>Plant App</Text>{' '}
            </Text>
            <Text style={styles.headerDescText}>Identify more than 3000+ plants and 88% accuracy</Text>
            <Image source={require('../../assets/images/tree.png')} style={styles.image} />
            <Button
                onPress={onGetStartedPressed}
                title={'Get Started'}
                styleOverrides={{
                    container: styles.buttonContainer,
                    title: styles.buttonTitle,
                }}
            />
            <Text style={styles.termsPrivacyText}>
                By tapping next, you are agreeing to PlantID <Text style={styles.termsPrivacyText}>Terms of Use</Text> &{' '}
                <Text style={styles.termsPrivacyText}>Privacy Policy</Text>
            </Text>
        </View>
    );
}

export default StartedScreen;
