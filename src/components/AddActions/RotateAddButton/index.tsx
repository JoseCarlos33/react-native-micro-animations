import React, { useState } from 'react';
import { View } from 'react-native';
import {
  ContainerPressable,
  LinesBox,
  Line
} from './styles';

import useRotateAddButtonAnimation from './useAnimation';

export interface RotateAddButtonProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  activeOpacity?: number;
  lineColor?: string;
  disableBoxShadow?: boolean;
  onPress?: () => void;
}

export function RotateAddButton(buttonProps: RotateAddButtonProps) {
  const [linesBoxWidth, setLinesBoxWidth] = useState(0)

  const {
    toogleAnimations,
    verticalLineAnimatedStyle,
    horizontalLineAnimatedStyle,
  } = useRotateAddButtonAnimation(linesBoxWidth);

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

export default RotateAddButton;