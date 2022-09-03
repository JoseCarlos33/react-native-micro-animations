import React, { useCallback, useRef, useState } from 'react';
import { Animated, Dimensions, View, Text } from 'react-native';
import AnimatedMenuVertically from './components/AnimatedMenus/AnimatedMenuVertically';
import { Container, AnimatedComponentBox, Box, ToggleButton } from './global/styles';
import GradientText from './components/GradientText';
import AnimatedMenuHorizontally from './components/AnimatedMenus/AnimatedMenuHorizontaly';

// import { Container } from './styles';

const MicroAnimations: React.FC = () => {
  const [positionPagination, setPositionPagination] = useState(0);

  const { width, height } = Dimensions.get('window');
  const animationPaginatedRef = useRef(null);

  const onPressEvent = () => {
    console.log("Faça alguma coisa aqui")
  }

  const activityColor = {
    backgroundColor: "#a78ebf",
    borderColor: "#a78ebf",
  }

  function getCurrentPage(scrollXOfPage: number) {
    const pageWidth = scrollXOfPage / width;
    pageWidth > 0.5
      ? setPositionPagination(1)
      : setPositionPagination(0)
  }

  const changePage = (pageIndex: number) => {
    animationPaginatedRef?.current?.scrollToOffset({
      offset: pageIndex * width,
    });
  }

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
      <View style={{ flexDirection: "row" }}>
        <ToggleButton style={[positionPagination == 0 && activityColor]} onPress={() => changePage(0)}>
          <Text style={{ fontFamily: "Rubik-Regular" }}>
            Menu Animado 1
          </Text>
        </ToggleButton>
        <ToggleButton style={[positionPagination == 1 && activityColor]} onPress={() => changePage(1)}>
          <Text style={{ fontFamily: "Rubik-Regular" }}>
            Menu Animado 2
          </Text>
        </ToggleButton>
      </View>
      <Animated.FlatList
        ref={animationPaginatedRef}
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
                      lineColor={"#343947"}
                      onPress={onPressEvent}
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
                      borderRadius={20}
                      activeOpacity={0.6}
                      backgroundColor={"#f5f5f5"}
                      lineColor={"#343947"}
                      onPress={onPressEvent}
                    />
                    <AnimatedMenuHorizontally
                      height={30}
                      width={30}
                      borderRadius={25}
                      activeOpacity={0.6}
                      backgroundColor={"#f5f5f5"}
                    />
                    <AnimatedMenuHorizontally
                      height={50}
                      width={50}
                      borderRadius={45}
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
        onScroll={e => {
          let contentOffset = e.nativeEvent.contentOffset;
          getCurrentPage(contentOffset.x);
        }}
      />
    </Container>
  );
}

export default MicroAnimations;