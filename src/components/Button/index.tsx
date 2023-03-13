import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

interface Props {
    title?: string;
    onPress?: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    styleOverrides: {
        container?: object;
        iconContainer?: object;
        title?: object;
    };
}

const Button = ({title, onPress, icon, disabled = false, styleOverrides}: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.95}
            onPress={onPress}
            disabled={disabled}
            hitSlop={styles.hitSlop}
            style={[styles.container, styleOverrides?.container, {opacity: disabled ? 0.6 : 1}]}>
            {icon && <View style={styleOverrides?.iconContainer}>{icon}</View>}
            {title && <Text style={styleOverrides?.title}>{title}</Text>}
        </TouchableOpacity>
    );
};

export default Button;
