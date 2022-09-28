import React from 'react';
import HeartNormal from '../../../assets/icons/heart-regular.svg';
import HeartSolid from '../../../assets/icons/heart-solid.svg';
import CustomElasticButton from '../CustomElasticButton';

interface LikeElasticButtonProps{
  initialColor?: string;
  endColor?: string;
  height?: number;
  width?: number;
  onPress?: () => void;
}

export function LikeElasticButton({height, width, initialColor, endColor, onPress}: LikeElasticButtonProps){
  return (
    <CustomElasticButton
      initIcon={<HeartNormal width={width ?? 32} height={height ?? 32} fill={initialColor ?? "#000"}/>}
      endIcon={<HeartSolid width={width ?? 32} height={height ?? 32} fill={endColor ?? "red"}/>}
      onPress={onPress}
    />
  );
}

export default LikeElasticButton;