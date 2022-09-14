import React from 'react';
import HeartNormal from '~/assets/icons/heart-regular.svg';
import HeartSolid from '~/assets/icons/heart-solid.svg';
import CustomElasticButton from '~/components/InstagramActions/CustomElasticButton';

interface LikeBounceButtonProps{
  height?: number;
  width?: number;
}

function LikeBounceButton({height, width}: LikeBounceButtonProps){
  return (
    <CustomElasticButton
      initIcon={<HeartNormal width={width ?? 32} height={height ?? 32} fill={"#000"}/>}
      endIcon={<HeartSolid width={width ?? 32} height={height ?? 32} fill={"red"}/>}
    />
  );
}

export default LikeBounceButton;