import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import GradientText from 'src/components/GradientText';
import {
  MenuContent,
  LinesBox,
  Line
} from './styles';
import useAnimationHorizontally from './useAnimation';

export interface MenuContentProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  activeOpacity?: number;
}

export interface linePositionRefsProps {
  topLinePosition?: number;
  middleLinePosition?: number;
  bottomLinePosition?: number;
}

function AnimatedMenuHorizontally(menuProps: MenuContentProps) {
  const [linesBoxWidth, setLinesBoxWidth] = useState(0)

  const {
    toogleAnimations,
    topLineAnimatedStyle,
    middleLineAnimatedStyle,
    bottomLineAnimatedStyle,
  } = useAnimationHorizontally(linesBoxWidth);

  return (
    <MenuContent {...menuProps} onPress={toogleAnimations}>
      <LinesBox
        onLayout={(event: any) => {
          const width = event.nativeEvent.layout.width;
          console.log(width);
          setLinesBoxWidth(width);
        }}
      >
        <View></View>
        <Line style={topLineAnimatedStyle} />
        <Line style={middleLineAnimatedStyle} />
        <Line style={bottomLineAnimatedStyle} />
        <View></View>
      </LinesBox>
    </MenuContent>
  );
}

export default AnimatedMenuHorizontally;