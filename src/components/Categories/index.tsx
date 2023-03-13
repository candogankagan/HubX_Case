import {ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

interface Props {
    title: string;
    imageURL: string;
}

const Categories = ({title, imageURL}: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <ImageBackground resizeMode="contain" style={styles.imageBackground} source={{uri: imageURL}}>
                <Text style={styles.text}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default Categories;
