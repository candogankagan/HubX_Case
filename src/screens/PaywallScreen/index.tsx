import React, {useState} from 'react';
import {ScrollView, ImageBackground, StatusBar, Text, View, Image, FlatList} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigators/application.navigator';
import Feature from '../../components/Feature';
import SubscriptionOption from '../../components/SubscriptionOption';
import Button from '../../components/Button';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {switchNavigate} from '../../store/ui/action';
import {subscriptionData, featureData} from '../../utils/data';
import {styles} from './style';

interface Props {
    navigation: NativeStackNavigationProp<OnboardingStackParamList, 'Paywall'>;
}

const PaywallScreen = ({navigation}: Props) => {
    const dispatch = useAppDispatch();
    const [selectedSubscription, setSelectedSubscription] = useState(0);

    const onCloseButtonPressed = () => {
        dispatch(switchNavigate('main'));
    };

    return (
        <ScrollView bounces={false} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ImageBackground resizeMode="stretch" source={require('../../assets/images/flowerpot.png')}>
                <Button
                    onPress={onCloseButtonPressed}
                    icon={<Image source={require('../../assets/icons/closeIcon.png')} />}
                    styleOverrides={{
                        container: styles.closeButtonContainer,
                    }}
                />
                <Text style={styles.headerText}>
                    <Text style={styles.headerNestedText}>PlantApp </Text>Premium
                </Text>
                <Text style={styles.headerDescText}>Acces All Features</Text>
                <FlatList
                    horizontal
                    ItemSeparatorComponent={() => <View style={styles.flatlistSeparator} />}
                    data={featureData}
                    style={styles.flatlist}
                    renderItem={({item}) => (
                        <Feature
                            icon={item.icon}
                            featureHeader={item.featureHeader}
                            featureHeaderDesc={item.featureHeaderDesc}
                        />
                    )}
                    contentContainerStyle={styles.flatlistContentContainer}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => String(item.id)}
                />
            </ImageBackground>
            {subscriptionData.map(item => (
                <SubscriptionOption
                    key={item.id}
                    id={item.id}
                    header={item.headerText}
                    description={item.descriptionText}
                    discount={item.discountRate}
                    setSelectedSubscription={setSelectedSubscription}
                    selectedSubscription={selectedSubscription}
                />
            ))}
            <View style={styles.buttonViewContainer}>
                <Button
                    title={'Try free for 3 days'}
                    styleOverrides={{
                        container: styles.buttonContainer,
                        title: styles.buttonTitle,
                    }}
                />
            </View>
            <Text style={styles.termsPrivacyDescText}>
                After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial
                expires. Yearly Subscription is Auto-Renewable
            </Text>
            <Text style={styles.termsPrivacyText}>Terms • Privacy • Restore</Text>
        </ScrollView>
    );
};

export default PaywallScreen;
