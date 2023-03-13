import {StyleSheet, Platform} from 'react-native';
import {StatusBarHeight} from '../../utils/statusBar';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(16, 30, 23)',
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 55,
        right: 16,
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: 24,
        borderRadius: 12,
        width: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        marginLeft: 24,
        fontSize: 27,
        fontFamily: 'Rubik-Regular',
        marginTop: '77%',
        color: '#fff',
    },
    headerNestedText: {
        fontFamily: 'Rubik-Bold',
    },
    headerDescText: {
        fontFamily: 'Rubik-Regular',
        color: 'rgba(255,255,255,0.7)',
        fontSize: 17,
        letterSpacing: 0.38,
        marginTop: 8,
        marginBottom: 20,
        marginLeft: 24,
    },
    flatlistSeparator: {
        marginRight: 8,
    },
    flatlist: {flexGrow: 0, marginBottom: 8},
    flatlistContentContainer: {paddingHorizontal: 24},
    buttonViewContainer: {
        width: '100%',
        paddingHorizontal: 24,
    },
    buttonContainer: {
        backgroundColor: '#28AF6E',
        width: '100%',
        height: 54,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 26,
    },
    buttonTitle: {
        fontFamily: 'SFProDisplay-Regular',
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
        letterSpacing: -0.24,
    },
    termsPrivacyDescText: {
        marginHorizontal: 24,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '300',
        fontFamily: 'Rubik-Regular',
        color: 'rgba(255, 255, 255, 0.52)',
        fontSize: 9,
        marginTop: 8,
        lineHeight: 11.88,
    },
    termsPrivacyText: {
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Rubik-Regular',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 11,
        marginVertical: 10,
        lineHeight: 11.88,
    },
});
