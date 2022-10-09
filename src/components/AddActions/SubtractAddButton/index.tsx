import React, { useState } from 'react';
import { View } from 'react-native';
import {
  ContainerPressable,
  LinesBox,
  Line
} from './styles';

import useSubtractAddButtonAnimation from './useAnimation';

export interface SubtractAddButtonProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  activeOpacity?: number;
  lineColor?: string;
  disableBoxShadow?: boolean;
  onPress?: () => void;
}

export function SubtractAddButton(buttonProps: SubtractAddButtonProps) {
  const [linesBoxWidth, setLinesBoxWidth] = useState(0)

  const {
    toogleAnimations,
    verticalLineAnimatedStyle,
    horizontalLineAnimatedStyle,
  } = useSubtractAddButtonAnimation(linesBoxWidth);

  return (
    <ContainerPressable
      {...buttonProps}
      onPress={() => {
        toogleAnimations()
        buttonProps.onPress && buttonProps.onPress()
      }}
    >
      <LinesBox
        onLayout={(event: any) => {
          const width = event.nativeEvent.layout.width;
          setLinesBoxWidth(width);
        }}
      >
        <Line style={verticalLineAnimatedStyle} {...buttonProps} />
        <Line style={horizontalLineAnimatedStyle} {...buttonProps} />
      </LinesBox>
    </ContainerPressable>
  );
}

export default SubtractAddButton;