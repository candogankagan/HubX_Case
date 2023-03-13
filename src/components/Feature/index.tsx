import React from 'react';
import {Text, View, Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';

interface Props {
    icon: ImageSourcePropType;
    featureHeader: string;
    featureHeaderDesc: string;
}

const Feature = ({icon, featureHeader, featureHeaderDesc}: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={icon} />
            </View>
            <Text style={styles.headerText}>{featureHeader}</Text>
            <Text style={styles.headerDescText}>{featureHeaderDesc}</Text>
        </View>
    );
};

export default Feature;
