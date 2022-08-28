import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import GradientText from '../GradientText';
import {
  MenuContent,
  LinesBox,
  Line
} from './styles';
import useAnimationVertically from './useAnimation';

export interface MenuContentProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  activeOpacity?: number;
}

function AnimatedMenuVertically(menuProps: MenuContentProps) {

  const {
    toogleAnimations, 
    topLineAnimatedStyle, 
    middleLineAnimatedStyle,
    bottomLineAnimatedStyle,
  } = useAnimationVertically();
  
  return (
    <MenuContent {...menuProps} onPress={toogleAnimations}>
      <LinesBox>
        <Line style={topLineAnimatedStyle}/>
        <Line style={middleLineAnimatedStyle}/>
        <Line style={bottomLineAnimatedStyle} />
      </LinesBox>
    </MenuContent>
  );
}

export default AnimatedMenuVertically;