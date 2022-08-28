import React from 'react';
import { View } from 'react-native';
import AnimatedMenuVertically from './components/AnimatedMenuVertically';
import { Container, AnimatedComponentBox } from './global/styles';
import GradientText from './components/GradientText';

// import { Container } from './styles';

const MicroAnimations: React.FC = () => {
  return (
    <Container>
      <GradientText
        title={"Micro Animações"}
        colorsData={[
          { color: "#a7006f", percent: "0%" },
          { color: "#620ed0", percent: "50%" },
          { color: "#2b1ac8", percent: "70%" },
        ]}
      />
      <AnimatedComponentBox>
        <AnimatedMenuVertically
          height={20}
          width={20}
          borderRadius={15}
          activeOpacity={0.6}
          backgroundColor={"#f5f5f5"}
        />
        <AnimatedMenuVertically
          height={30}
          width={30}
          borderRadius={20}
          activeOpacity={0.6}
          backgroundColor={"#f5f5f5"}
        />
        <AnimatedMenuVertically
          height={50}
          width={50}
          borderRadius={40}
          activeOpacity={0.6}
          backgroundColor={"#f5f5f5"}
        />
      </AnimatedComponentBox>
    </Container>
  );
}

export default MicroAnimations;