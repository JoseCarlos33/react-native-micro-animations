import React, { useEffect, useRef, useState } from 'react';
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

export interface linePositionRefsProps{
  topLinePosition?: number;
  middleLinePosition?: number;
  bottomLinePosition?: number;
}

function AnimatedMenuVertically(menuProps: MenuContentProps) {
  const [ linePositionRefs, setLinePositionRefs ] = useState<linePositionRefsProps>({} as linePositionRefsProps)

  const {
    toogleAnimations,
    topLineAnimatedStyle,
    middleLineAnimatedStyle,
    bottomLineAnimatedStyle,
  } = useAnimationVertically(linePositionRefs);

  const setLinePositionByKey = (key: keyof linePositionRefsProps, positionYValue: number) => {
    setLinePositionRefs({ ...linePositionRefs, [key]: positionYValue})
  }

  console.log("linePositionRefs", linePositionRefs)

  return (
    <MenuContent {...menuProps} onPress={toogleAnimations}>
      <LinesBox>
        <Line
          onLayout={(event: any) => {
            const positionY = event.nativeEvent.layout.y;
            setLinePositionByKey("topLinePosition", positionY);
          }} 
          style={topLineAnimatedStyle}
        />
        <Line
          onLayout={(event: any) => {
            const positionY = event.nativeEvent.layout.y;
            setLinePositionByKey("middleLinePosition", positionY);
          }}
          style={middleLineAnimatedStyle}
        />
        <Line
          onLayout={(event: any) => {
            const positionY = event.nativeEvent.layout.y;
            setLinePositionByKey("bottomLinePosition", positionY);
          }} 
          style={bottomLineAnimatedStyle} 
        />
      </LinesBox>
    </MenuContent>
  );
}

export default AnimatedMenuVertically;