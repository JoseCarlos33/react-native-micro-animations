import React from 'react';
import HeartNormal from '~/assets/icons/heart-regular.svg';
import HeartSolid from '~/assets/icons/heart-solid.svg';
import CustomElasticButton from '~/components/InstagramActions/CustomElasticButton';

interface LikeBounceButtonProps{
  initialColor?: string;
  endColor?: string;
  height?: number;
  width?: number;
  onPress?: () => void;
}

function LikeBounceButton({height, width, initialColor, endColor, onPress}: LikeBounceButtonProps){
  return (
    <CustomElasticButton
      initIcon={<HeartNormal width={width ?? 32} height={height ?? 32} fill={initialColor ?? "#000"}/>}
      endIcon={<HeartSolid width={width ?? 32} height={height ?? 32} fill={endColor ?? "red"}/>}
      onPress={onPress}
    />
  );
}

export default LikeBounceButton;