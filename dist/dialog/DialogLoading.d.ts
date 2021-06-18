import React from 'react';
import { ViewStyle, ActivityIndicatorProps, StyleProp } from 'react-native';
export declare type DialogLoadingProps = {
    loadingStyle?: StyleProp<ViewStyle>;
    loadingProps?: ActivityIndicatorProps;
};
declare const _default: React.FunctionComponent<Pick<DialogLoadingProps & Partial<import("../config").ThemeProps<DialogLoadingProps>>, "loadingStyle" | "loadingProps">> | React.ForwardRefExoticComponent<DialogLoadingProps & Partial<import("../config").ThemeProps<DialogLoadingProps>>>;
export default _default;
