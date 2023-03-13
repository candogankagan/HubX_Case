import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

interface Props {
    id: number;
    header: string;
    description: string;
    discount: number;
    setSelectedSubscription: (value: number) => void;
    selectedSubscription: number;
}

const SubscriptionOption = ({
    id,
    header,
    description,
    discount,
    setSelectedSubscription,
    selectedSubscription,
}: Props) => {
    const onSubscriptionPressed = (id: number) => {
        setSelectedSubscription(id);
    };

    return (
        <TouchableOpacity onPress={() => onSubscriptionPressed(id)}>
            <LinearGradient
                style={[
                    styles.container,
                    {borderColor: selectedSubscription === id ? '#28AF6E' : 'rgba(255,255,255,0.3)'},
                ]}
                start={{x: 0, y: 0}}
                end={{x: 10, y: 0}}
                colors={
                    selectedSubscription === id
                        ? ['rgb(16, 30, 23)', 'rgba(40, 175, 110, 0)']
                        : ['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.05)']
                }>
                <View
                    style={[
                        styles.circleContainer,
                        {
                            backgroundColor: selectedSubscription === id ? '#28AF6E' : 'rgba(255,255,255,0.15)',
                        },
                    ]}>
                    {selectedSubscription === id && <View style={styles.whiteCircle} />}
                </View>
                <View>
                    <Text style={styles.headerText}>{header}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
                {selectedSubscription === id && (
                    <View style={styles.discountContainer}>
                        <Text style={styles.discountText}>Save {discount}%</Text>
                    </View>
                )}
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default SubscriptionOption;
