import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { withTheme } from '../config';
import { renderNode } from '../helpers';

export type BadgeProps = {
  containerStyle?: StyleProp<ViewStyle>;
  badgeStyle?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  textStyle?: StyleProp<ViewStyle>;
  value?: React.ReactNode;
  onPress?: (...args: any[]) => any;
  Component?: React.ComponentClass;
  theme?: object;
  status?: 'primary' | 'success' | 'warning' | 'error';
};

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const {
    containerStyle,
    textStyle,
    textProps,
    badgeStyle,
    onPress,
    Component = onPress ? TouchableOpacity : View,
    value,
    theme,
    status,
    ...attributes
  } = props;
  const element = renderNode(Text, value, {
    style: StyleSheet.flatten([styles.text, textStyle && textStyle]),
    ...textProps,
  });
  return (
    <View style={StyleSheet.flatten([containerStyle && containerStyle])}>
      <Component
        {...attributes}
        style={StyleSheet.flatten([
          styles.badge(theme, status),
          !element && styles.miniBadge,
          badgeStyle && badgeStyle,
        ])}
        onPress={onPress}
      >
        {element}
      </Component>
    </View>
  );
};

Badge.defaultProps = {
  status: 'primary',
};

const size = 18;
const miniSize = 8;
const styles = {
  badge: (theme, status) => ({
    alignSelf: 'center',
    minWidth: size,
    height: size,
    borderRadius: size / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors[status],
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
  }),
  miniBadge: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: miniSize,
    height: miniSize,
    borderRadius: miniSize / 2,
  },
  text: {
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 4,
  },
};

export { Badge };
export default withTheme(Badge, 'Badge');