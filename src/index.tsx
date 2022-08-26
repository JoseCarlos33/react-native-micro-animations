import React from 'react';
import { View } from 'react-native';
import AnimatedMenuVertically from './components/AnimatedMenuVertically';
import { Container } from './components/AnimatedMenuVertically/styles';
import GradientText from './components/GradientText';

// import { Container } from './styles';

const MicroAnimations: React.FC = () => {
  return (
    <Container>
      <GradientText 
        title={"Micro Animações"}
        colorsData={[
          {color: "#a7006f", percent: "0%"},
          {color: "#620ed0", percent: "50%"},
          {color: "#2b1ac8", percent: "70%"}, 
        ]}
      />
      <AnimatedMenuVertically/>
    </Container>
  );
}

export default MicroAnimations;