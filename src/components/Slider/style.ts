import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '6%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    blackCircle: {
        backgroundColor: '#13231B',
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    grayCricle: {
        backgroundColor: 'rgba(19,35,27,0.25)',
        width: 6,
        height: 6,
        borderRadius: 10,
    },
});
