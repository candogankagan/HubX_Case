import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    imageBackground: {
        width: windowWidth * 0.7,
        height: windowWidth * 0.45,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        width: '90%',
        fontFamily: 'Rubik-Medium',
        fontSize: 15,
        lineHeight: 20,
        position: 'absolute',
        bottom: 14,
        left: 14,
        color: '#fff',
    },
});
