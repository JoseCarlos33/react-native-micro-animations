import React from 'react';
// import HeartNormal from './src/assets/icons/heart-regular.svg';
// import HeartSolid from 'src/assets/icons/heart-solid.svg';
import CustomBounceButton from '~/components/InstagramActions/CustomBounceButton';

interface LikeBounceButtonProps{
  height?: number;
  width?: number;
}

function LikeBounceButton({height, width}: LikeBounceButtonProps){
  return (
    <></>
    // <CustomBounceButton
    //   initIcon={<HeartNormal width={width ?? 32} height={height ?? 32} fill={"#000"}/>}
    //   endIcon={<HeartSolid width={width ?? 32} height={height ?? 32} fill={"#000"}/>}
    // />
  );
}

export default LikeBounceButton;