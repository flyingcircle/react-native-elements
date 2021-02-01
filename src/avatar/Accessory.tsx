import React from 'react';
import { TouchableHighlight, View, Platform, StyleSheet } from 'react-native';
import { withTheme } from '../config';
import Image from '../image/Image';
import Icon from '../icons/Icon';
import { IconProps, ImageProps } from '../../';

export type AccessoryProps = Partial<IconProps> & Partial<ImageProps>;

const Accessory: React.FunctionComponent<AccessoryProps> = ({
  size,
  style,
  underlayColor,
  onPress,
  onLongPress,
  source,
  ...props
}) => {
  return (
    <TouchableHighlight
      style={StyleSheet.flatten([
        styles.accessory,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ])}
      underlayColor={underlayColor}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View>
        {source ? (
          <Image
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
            }}
            {...props}
          />
        ) : (
          <Icon size={size * 0.8} {...props} />
        )}
      </View>
    </TouchableHighlight>
  );
};

Accessory.defaultProps = {
  size: 10,
  name: 'mode-edit',
  type: 'material',
  color: '#fff',
  underlayColor: '#000',
};

const styles = StyleSheet.create({
  accessory: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
    }),
  },
});

export default withTheme(Accessory, 'AvatarAccessory');