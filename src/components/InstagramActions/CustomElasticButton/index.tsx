import React from 'react';
import { MenuContentProps } from 'src/components/AnimatedMenus/AnimatedMenuVertically';
import { 
  ContainerPressable,
  IconBox
} from './styles';

import CustomElasticButtonAnimation from './useAnimation';

interface CustomElasticButtonProps extends MenuContentProps{
  initIcon: JSX.Element;
  endIcon: JSX.Element;
  height?: number;
  width?: number;
}

function CustomElasticButton(menuProps: CustomElasticButtonProps){

  const {
    initIconAnimatedStyle,
    endIconAnimatedStyle,
    toogleAnimations
  } = CustomElasticButtonAnimation();

  return (
    <ContainerPressable onPress={() => { 
      toogleAnimations();
      // menuProps.onPress && menuProps.onPress();
    }} {...menuProps}>
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