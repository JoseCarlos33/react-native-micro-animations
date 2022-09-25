import React from 'react';
import BookmarkNormal from '../../assets/icons/bookmark-regular.svg';
import BookmarkSolid from '../../assets/icons/bookmark-solid.svg';
import CustomElasticButton from '../CustomElasticButton';

interface SaveElasticButtonProps{
  initialColor?: string;
  endColor?: string;
  height?: number;
  width?: number;
  onPress?: () => void;
}

export function SaveElasticButton({height, width, initialColor, endColor, onPress}: SaveElasticButtonProps){
  return (
    <CustomElasticButton
      initIcon={<BookmarkNormal width={width ?? 32} height={height ?? 32} fill={initialColor ?? "#000"}/>}
      endIcon={<BookmarkSolid width={width ?? 32} height={height ?? 32} fill={endColor ?? "#000"}/>}
      onPress={onPress}
    />
  );
}

export default SaveElasticButton;