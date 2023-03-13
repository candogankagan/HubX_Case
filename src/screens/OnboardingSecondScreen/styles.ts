import {StyleSheet, Platform} from 'react-native';
import {StatusBarHeight} from '../../utils/statusBar';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBarHeight,
    },
    headerText: {
        marginTop: 24,
        fontFamily: 'Rubik-Medium',
        fontSize: 28,
        letterSpacing: -1,
        lineHeight: 33,
        color: '#12331B',
        marginHorizontal: 24,
    },
    headerNestedText: {
        fontFamily: 'Rubik-Bold',
    },
    imageBackground: {
        width: '100%',
        height: '70%',
    },
    imageArtwork: {position: 'absolute', top: Platform.OS == 'ios' ? '18%' : '12%', left: '2%'},
    imageMobile: {width: '70%', alignSelf: 'center', position: 'absolute', bottom: '13.7%', height: '66%'},
    buttonViewContainer: {
        width: '100%',
        paddingHorizontal: 24,
        position: 'absolute',
        bottom: '11%',
    },
    buttonContainer: {
        backgroundColor: '#28AF6E',
        width: '100%',
        height: 56,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        fontFamily: 'SFProDisplay-Regular',
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
        letterSpacing: -0.24,
    },
});
