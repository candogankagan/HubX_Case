import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#24201A',
        marginHorizontal: 24,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 24,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContaimer: {
        marginLeft: 16,
    },
    headerText: {
        fontSize: 16,
        letterSpacing: -0.32,
        fontFamily: 'SFProDisplay-Bold',
        color: '#E6C990',
    },
    headerDescText: {
        fontFamily: 'SFProDisplay-Regular',
        color: 'rgba(255,222,156,0.8)',
    },
});
