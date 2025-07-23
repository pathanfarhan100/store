import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import icoMoonConfig from '../../theme/selection.json';
import { APP_NAME, ICONS } from '../../constant/constants';
import { colors } from '../../constant/colors';

const IconMoonIcons = createIconSetFromIcoMoon(
  icoMoonConfig,
  APP_NAME,
  APP_NAME + '.ttf',
);

const CustomIcon = props => {
  const { style = {}, iconName = ICONS.FILTER, color = colors.white } = props;
  return (
    <IconMoonIcons style={style} name={iconName} color={color} {...props} />
  );
};

export default CustomIcon;
