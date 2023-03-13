import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignSelf: 'flex-start',
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.08),',
        width: windowWidth * 0.42,
    },
    imageContainer: {
        padding: 9,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.24)',
        alignSelf: 'flex-start',
    },
    image: {
        width: 18,
        height: 18,
    },
    headerText: {
        marginTop: 16,
        color: '#fff',
        letterSpacing: 0.38,
        fontFamily: 'Rubik-Regular',
        fontSize: 20,
        fontWeight: '500',
    },
    headerDescText: {
        marginTop: 4,
        fontFamily: 'Rubik-Regular',
        color: 'rgba(255,255,255,0.7)',
        fontSize: 13,
    },
});
