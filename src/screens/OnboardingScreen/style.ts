import {StyleSheet} from 'react-native';
import {StatusBarHeight} from '../../utils/statusBar';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBarHeight,
        paddingHorizontal: 24,
    },
    headerText: {
        marginTop: 24,
        fontFamily: 'Rubik-Medium',
        fontSize: 28,
        letterSpacing: -1,
        lineHeight: 33,
        color: '#12331B',
    },
    headerNestedText: {
        fontFamily: 'Rubik-Bold',
    },
    image: {
        width: '100%',
        marginTop: 10,
        height: '70%',
    },
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: '#28AF6E',
        width: '100%',
        height: 56,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '11%',
    },
    buttonTitle: {
        fontFamily: 'SFProDisplay-Regular',
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
        letterSpacing: -0.24,
    },
});
