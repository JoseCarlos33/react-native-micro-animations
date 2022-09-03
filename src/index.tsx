import React from 'react';
import { Animated, Dimensions, View } from 'react-native';
import AnimatedMenuVertically from './components/AnimatedMenus/AnimatedMenuVertically';
import { Container, AnimatedComponentBox, Box } from './global/styles';
import GradientText from './components/GradientText';
import AnimatedMenuHorizontally from './components/AnimatedMenus/AnimatedMenuHorizontaly';

// import { Container } from './styles';

const MicroAnimations: React.FC = () => {
  const { width, height } = Dimensions.get('window');

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
      <Animated.FlatList
        data={[1234, 2345]}
        keyExtractor={item => item.toString()}
        renderItem={({ item, index }) => {
          return (
            <Box key={item} style={{ width: width - 13, height: "100%" }}>
              {
                index == 0 ? (
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
                ) : (
                  <AnimatedComponentBox>
                    <AnimatedMenuHorizontally
                      height={20}
                      width={20}
                      borderRadius={15}
                      activeOpacity={0.6}
                      backgroundColor={"#f5f5f5"}
                    />
                    <AnimatedMenuHorizontally
                      height={30}
                      width={30}
                      borderRadius={20}
                      activeOpacity={0.6}
                      backgroundColor={"#f5f5f5"}
                    />
                    <AnimatedMenuHorizontally
                      height={50}
                      width={50}
                      borderRadius={40}
                      activeOpacity={0.6}
                      backgroundColor={"#f5f5f5"}
                    />
                  </AnimatedComponentBox>
                )
              }
            </Box>
          )
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ padding: 0 }}
      />
    </Container>
  );
}

export default MicroAnimations;