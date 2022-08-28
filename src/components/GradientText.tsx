import React from 'react';
import Svg, {
  LinearGradient,
  Text,
  Defs,
  Stop,
  TSpan
} from 'react-native-svg';
interface ColorProps{
  color: string;
  percent: string;
}

interface GradientTextProps{
  title: string;
  colorsData: Array<ColorProps>;
}

function GradientText({title, colorsData}:GradientTextProps){
  return (
    <Svg viewBox="0 0 300 100" height="100"
      width="330">
      <Defs>
        <LinearGradient id="rainbow" x1="0" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse" >
          {
            colorsData?.map((colorObject) => <Stop key={Math.random()} stopColor={colorObject.color} offset={colorObject.percent} />)
          }
        </LinearGradient>
      </Defs>
      <Text fill="url(#rainbow)">
        <TSpan
          fontSize="39"
          fontFamily="Rubik-Regular"
          x="0"
          y="72"
        >
          {title}
        </TSpan>
      </Text>
    </Svg>
  );
}

export default GradientText;