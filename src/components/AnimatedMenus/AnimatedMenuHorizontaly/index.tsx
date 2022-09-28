import React, { useState } from 'react';
import { View } from 'react-native';
import {
  MenuContent,
  LinesBox,
  Line
} from './styles';

import useAnimationHorizontally from './useAnimation';
import { MenuContentProps } from 'src/components/AnimatedMenus/AnimatedMenuVertically';

export function AnimatedMenuHorizontally(menuProps: MenuContentProps) {
  const [linesBoxWidth, setLinesBoxWidth] = useState(0)

  const {
    toogleAnimations,
    topLineAnimatedStyle,
    middleLineAnimatedStyle,
    bottomLineAnimatedStyle,
  } = useAnimationHorizontally(linesBoxWidth);

  return (
    <MenuContent
      {...menuProps}
      onPress={() => {
        toogleAnimations()
        menuProps.onPress && menuProps.onPress()
      }}
    >
      <LinesBox
        onLayout={(event: any) => {
          const width = event.nativeEvent.layout.width;
          setLinesBoxWidth(width);
        }}
      >
        <View></View>
        <Line style={topLineAnimatedStyle} {...menuProps} />
        <Line style={middleLineAnimatedStyle} {...menuProps} />
        <Line style={bottomLineAnimatedStyle} {...menuProps} />
        <View></View>
      </LinesBox>
    </MenuContent>
  );
}

export default AnimatedMenuHorizontally;