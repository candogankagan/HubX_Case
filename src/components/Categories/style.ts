import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    imageBackground: {
        borderColor: 'rgba(41,187,137,0.18)',
        borderWidth: 0.5,
        backgroundColor: '#F4F6F6',
        width: windowWidth * 0.423,
        height: windowWidth * 0.4,
        marginRight: 12,
        marginTop: 16,
        borderRadius: 12,
    },
    text: {
        width: '60%',
        marginTop: 16,
        marginLeft: 16,
        fontFamily: 'Rubik-Medium',
        lineHeight: 21,
        fontSize: 16,
        letterSpacing: -0.32,
        color: '#13231B',
    },
});
