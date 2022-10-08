import React, { useCallback, useRef, useState } from 'react';
import { Animated, Dimensions, View, Text, Image } from 'react-native';
import AnimatedMenuVertically from './components/AnimatedMenus/AnimatedMenuVertically';
import { Container, AnimatedComponentBox, Box, ToggleButton, SectionComponentBox, AnimationCardBox } from './global/styles';
import GradientText from './components/GradientText';
import AnimatedMenuHorizontally from './components/AnimatedMenus/AnimatedMenuHorizontaly';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SaveElasticButton from './components/InstagramActions/SaveElasticButton';
import LikeElasticButton from './components/InstagramActions/LikeElasticButton';
import CommentsNormal from '~/assets/icons/comments-regular.svg';
import CommentsSolid from '~/assets/icons/comments-solid.svg';
import EyeNormal from '~/assets/icons/eye-regular.svg';
import EyeSolid from '~/assets/icons/eye-slash-solid.svg';
import FolderNormal from '~/assets/icons/folder-open-regular.svg';
import FolderSolid from '~/assets/icons/folder-solid.svg';
import CustomElasticButton from './components/InstagramActions/CustomElasticButton';
import ParallaxAddButton from './components/AddActions/ParallaxAddButton';
import RotateAddButton from './components/AddActions/RotateAddButton';

export const MicroAnimations: React.FC = () => {
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
    const pageWidth = Math.round(scrollXOfPage / width);
    setPositionPagination(pageWidth)
  }

  const changePage = (pageIndex: number) => {
    animationPaginatedRef?.current?.scrollToOffset({
      offset: pageIndex * width,
    });
  }

  return (
    <Container>
      <GradientText
        title={"Micro Animations"}
        colorsData={[
          { color: "#a7006f", percent: "0%" },
          { color: "#620ed0", percent: "50%" },
          { color: "#2b1ac8", percent: "70%" },
        ]}
      />
      <View style={{ flexDirection: "row" }}>
        <Animated.FlatList
          ref={animationPaginatedRef}
          data={["Animated Menu 1", "Animated Menu 2", "Instagram Actions", "Add Actions"]}
          keyExtractor={item => item}
          renderItem={({ item, index }) =>
            <ToggleButton key={item} style={[index == positionPagination && activityColor]} onPress={() => {
              changePage(index)
            }}>
              <Text style={{ fontFamily: "Rubik-Regular" }}>
                {item}
              </Text>
            </ToggleButton>
          }
          horizontal
          showsHorizontalScrollIndicator={false}

        />
      </View>
      <Animated.FlatList
        ref={animationPaginatedRef}
        data={[1234, 2345, 3456, 4567]}
        keyExtractor={item => item.toString()}
        renderItem={({ item, index }) => {
          return (
            <Box key={item} style={{ width: wp(97), height: "100%" }}>
              {
                index === 0 && (
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
                )
              }
              {
                index === 1 && (
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
              {
                index === 2 && (
                  <AnimatedComponentBox style={{ justifyContent: "flex-start" }} >
                    <SectionComponentBox>
                      <Text style={{ fontFamily: "Rubik-Regular", fontSize: 22 }}>
                        Save Action Button
                      </Text>
                      <AnimationCardBox>
                        <SaveElasticButton onPress={() => console.log("teste")} />
                        <SaveElasticButton height={45} width={45} />
                        <SaveElasticButton height={55} width={55} />
                        <SaveElasticButton height={65} width={65} />
                      </AnimationCardBox>
                    </SectionComponentBox>
                    <SectionComponentBox>
                      <Text style={{ fontFamily: "Rubik-Regular", fontSize: 22 }}>
                        Like Action Button
                      </Text>
                      <AnimationCardBox>
                        <LikeElasticButton />
                        <LikeElasticButton height={45} width={45} />
                        <LikeElasticButton height={55} width={55} />
                        <LikeElasticButton height={65} width={65} />
                      </AnimationCardBox>
                    </SectionComponentBox>
                    <SectionComponentBox>
                      <Text style={{ fontFamily: "Rubik-Regular", fontSize: 22 }}>
                        Custom Action Button
                      </Text>
                      <AnimationCardBox>
                        <CustomElasticButton
                          initIcon={<CommentsNormal height={45} width={45} fill={"#000"} />}
                          endIcon={<CommentsSolid height={45} width={45} fill={"#000"} />}
                        />
                        <CustomElasticButton
                          initIcon={<EyeNormal height={45} width={45} fill={"#000"} />}
                          endIcon={<EyeSolid height={45} width={45} fill={"#000"} />}
                        />
                        <CustomElasticButton
                          initIcon={<FolderSolid height={45} width={45} fill={"#000"} />}
                          endIcon={<FolderNormal height={45} width={45} fill={"#000"} />}
                          onPress={onPressEvent}
                        />
                      </AnimationCardBox>
                    </SectionComponentBox>
                  </AnimatedComponentBox>
                )
              }
              {
                index === 3 && (
                  <AnimatedComponentBox style={{justifyContent: "flex-start"}}>
                    <SectionComponentBox>
                      <Text style={{ fontFamily: "Rubik-Regular", fontSize: 22 }}>
                        Add Action Button
                      </Text>
                      <AnimationCardBox>
                        <ParallaxAddButton/>
                        <RotateAddButton/>
                      </AnimationCardBox>
                    </SectionComponentBox>
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
    </Container >
  );
}