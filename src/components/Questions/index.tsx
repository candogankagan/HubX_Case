import React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

interface Props {
    title: string;
    imageURL: string;
}

const Questions = ({title, imageURL}: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <ImageBackground imageStyle={{borderRadius: 12}} style={styles.imageBackground} source={{uri: imageURL}}>
                <Text numberOfLines={2} style={styles.text}>
                    {title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default Questions;
