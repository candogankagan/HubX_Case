import {View} from 'react-native';
import React from 'react';
import {styles} from './style';

interface Props {
    step: number;
}

const Slider = ({step}: Props) => {
    return (
        <View style={styles.container}>
            <View style={step === 1 ? styles.blackCircle : styles.grayCricle} />
            <View style={[step === 2 ? styles.blackCircle : styles.grayCricle, {marginHorizontal: 8}]} />
            <View style={step === 3 ? styles.blackCircle : styles.grayCricle} />
        </View>
    );
};

export default Slider;
