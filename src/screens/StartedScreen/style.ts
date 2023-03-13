import {StyleSheet} from 'react-native';
import {StatusBarHeight} from '../../utils/statusBar';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingTop: StatusBarHeight,
        paddingHorizontal: 24,
    },
    headerText: {
        marginTop: 24,
        fontFamily: 'Rubik-Regular',
        fontSize: 28,
        color: '#13231B',
        letterSpacing: 0.07,
    },
    headerNestedText: {
        fontFamily: 'Rubik-SemiBold',
    },
    headerDescText: {
        marginTop: 8,
        width: '85%',
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.07,
        color: 'rgba(19,35,27,0.7)',
    },
    image: {
        width: '100%',
        marginTop: 24,
        height: '64%',
        marginBottom: 5,
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
    termsPrivacyText: {
        alignSelf: 'center',
        width: '70%',
        textAlign: 'center',
        position: 'absolute',
        bottom: '5%',
        fontFamily: 'Rubik-Regular',
        color: 'rgba(89,113,101,0.7)',
        fontSize: 11,
        lineHeight: 15,
    },
    nestedTermsPrivacyText: {
        textDecorationLine: 'underline',
    },
});
