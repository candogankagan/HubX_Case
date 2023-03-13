import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 14,
        marginHorizontal: 24,
        marginTop: 16,
        paddingLeft: 16,
        paddingVertical: 13,
    },
    circleContainer: {
        marginRight: 12,
        borderRadius: 24,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteCircle: {
        borderRadius: 24,
        backgroundColor: '#fff',
        height: 8,
        width: 8,
    },
    headerText: {
        fontSize: 16,
        fontFamily: 'Rubik-SemiBold',
        color: '#fff',
    },
    descriptionText: {
        fontSize: 12,
        fontFamily: 'Rubik-Medium',
        fontWeight: '300',
        color: '#fff',
        marginTop: 2,
    },
    discountContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#28AF6E',
        paddingVertical: 4,
        paddingLeft: 12,
        paddingRight: 9,
        borderBottomLeftRadius: 100,
    },
    discountText: {fontSize: 12, fontFamily: 'Rubik-SemiBold', color: '#fff'},
});
