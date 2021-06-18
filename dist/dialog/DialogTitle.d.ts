import React from 'react';
import { TextStyle, StyleProp } from 'react-native';
import { TextProps } from '../text/Text';
export declare type DialogTitleProps = {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    titleProps?: TextProps;
};
declare const _default: React.FunctionComponent<Pick<DialogTitleProps & Partial<import("../config").ThemeProps<DialogTitleProps>>, "title" | "titleStyle" | "titleProps">> | React.ForwardRefExoticComponent<DialogTitleProps & Partial<import("../config").ThemeProps<DialogTitleProps>>>;
export default _default;
