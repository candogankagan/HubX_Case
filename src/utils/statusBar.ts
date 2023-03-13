import {Dimensions, Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const insets = useSafeAreaInsets();

export const StatusBarHeight = Platform.select({
    ios: insets.top,
    default: 0,
});
