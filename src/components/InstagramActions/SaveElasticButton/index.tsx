import React from 'react';
import BookmarkNormal from '~/assets/icons/bookmark-regular.svg';
import BookmarkSolid from '~/assets/icons/bookmark-solid.svg';
import CustomElasticButton from '~/components/InstagramActions/CustomElasticButton';

interface SaveElasticButtonProps{
  height?: number;
  width?: number;
}

function SaveElasticButton({height, width}: SaveElasticButtonProps){
  return (
    <CustomElasticButton
      initIcon={<BookmarkNormal width={width ?? 32} height={height ?? 32} fill={"#000"}/>}
      endIcon={<BookmarkSolid width={width ?? 32} height={height ?? 32} fill={"#000"}/>}
    />
  );
}

export default SaveElasticButton;