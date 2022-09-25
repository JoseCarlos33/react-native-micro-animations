import React from 'react';
import {
  ContainerPressable,
  IconBox,
} from './styles';

import CustomElasticButtonAnimation from './useAnimation';

export interface CustomElasticButtonProps {
  initIcon: JSX.Element;
  endIcon: JSX.Element;
  height?: number;
  width?: number;
  activeOpacity?: number;
  onPress?: any;
}

export function CustomElasticButton(menuProps: CustomElasticButtonProps) {

  const {
    initIconAnimatedStyle,
    endIconAnimatedStyle,
    toogleAnimations
  } = CustomElasticButtonAnimation();

  return (
    <ContainerPressable
      {...menuProps}
      onPress={() => {
        toogleAnimations();
        menuProps.onPress && menuProps.onPress()
      }}
    >
      <IconBox style={initIconAnimatedStyle}>
        {menuProps.initIcon}
      </IconBox>
      <IconBox style={endIconAnimatedStyle}>
        {menuProps.endIcon}
      </IconBox>
    </ContainerPressable>
  );
}

export default CustomElasticButton;