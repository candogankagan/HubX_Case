import {StyleSheet} from 'react-native';
import {StatusBarHeight} from '../../utils/statusBar';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        paddingTop: StatusBarHeight,
        paddingHorizontal: 24,
        paddingBottom: 14,
    },
    headerText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        letterSpacing: 0.07,
        color: '#13231B',
        marginTop: 15,
    },
    headerSecondText: {
        fontFamily: 'Rubik-SemiBold',
        fontSize: 24,
        letterSpacing: 0.35,
        color: '#13231B',
        marginTop: 6,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        backgroundColor: 'rgba(255,255,255,0.88)',
        borderWidth: 0.2,
        borderColor: 'rgba(60,60,67,0.25)',
        borderRadius: 12,
        paddingHorizontal: 15,
        marginTop: 14,
        zIndex: 99,
    },
    input: {
        padding: 0,
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        marginLeft: 14,
        flex: 1,
    },
    imageBackground: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
});
