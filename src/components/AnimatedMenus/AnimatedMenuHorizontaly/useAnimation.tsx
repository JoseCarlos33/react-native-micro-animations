import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

export default function useAnimationHorizontally(lineBoxWidth: number) {
  const [currentAnimation, setCurrentAnimation] = useState(false);
  const [isFirstAnimation, setIsFirstAnimation] = useState(false);

  const lineWidth = lineBoxWidth ? lineBoxWidth * 0.7 : 0

  let topLineRef = useRef(new Animated.Value(0)).current;
  topLineRef.setValue(lineWidth);

  let middleLineRef = useRef(new Animated.Value(0)).current;
  middleLineRef.setValue(lineWidth);

  let bottomLineRef = useRef(new Animated.Value(0)).current
  bottomLineRef.setValue(lineWidth);

  let topLineRotateRef = useRef(new Animated.Value(0)).current
  let bottomLineRotateRef = useRef(new Animated.Value(0)).current
  let spaceBottomAndTopRef = useRef(new Animated.Value(0)).current

  const spinTop = topLineRotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-45deg'],
    easing: Easing.ease
  })

  const spinBottom = bottomLineRotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
    easing: Easing.ease
  })

  const spaceBottomAndTop = spaceBottomAndTopRef.interpolate({
    inputRange: [0, 1],
    outputRange: ["32%", "75%"],
    easing: Easing.ease
  })

  let topLineAnimatedStyle = {
    width: topLineRef,
    position: "absolute",
    top: spaceBottomAndTop,
    right: "21%",
    transform: [{
      rotate: spinTop
    }]
  }

  let bottomLineAnimatedStyle = {
    width: bottomLineRef,
    position: "absolute",
    bottom: spaceBottomAndTop,
    right: "21%",
    transform: [{
      rotate: spinBottom
    }]
  }

  let middleLineAnimatedStyle = {
    width: middleLineRef
  }

  function startAnimation() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          topLineRef,
          {
            toValue: 0,
            duration: 200,
            easing: Easing.cubic,
            useNativeDriver: false
          }
        ),

        Animated.timing(
          middleLineRef,
          {
            toValue: 0,
            duration: 350,
            easing: Easing.cubic,
            useNativeDriver: false
          }
        ),

        Animated.timing(
          bottomLineRef,
          {
            toValue: 0,
            duration: 500,
            easing: Easing.cubic,
            useNativeDriver: false
          }
        ),
      ]),
      Animated.sequence([
        Animated.timing(
          topLineRotateRef,
          {
            toValue: 1,
            duration: 5,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),

        Animated.timing(
          spaceBottomAndTopRef,
          {
            toValue: 1,
            duration: 5,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),

        Animated.timing(
          topLineRef,
          {
            toValue: lineWidth,
            duration: 300,
            easing: Easing.back(1),
            useNativeDriver: false
          }
        ),

        Animated.timing(
          bottomLineRotateRef,
          {
            toValue: 1,
            duration: 5,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),

        Animated.timing(
          bottomLineRef,
          {
            toValue: lineWidth,
            duration: 300,
            easing: Easing.back(1),
            useNativeDriver: false
          }
        ),
      ])
    ]).start()

  }

  function resetAnimation() {
    topLineRef.setValue(lineWidth);
    middleLineRef.setValue(0);
    bottomLineRef.setValue(lineWidth);
    topLineRotateRef.setValue(1);
    spaceBottomAndTopRef.setValue(1);
    bottomLineRotateRef.setValue(1)
    
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          topLineRef,
          {
            toValue: 0,
            duration: 350,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),
        Animated.timing(
          spaceBottomAndTopRef,
          {
            toValue: 0,
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),
        Animated.timing(
          bottomLineRef,
          {
            toValue: 0,
            duration: 350,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),
      ]),
      Animated.sequence([
        Animated.timing(
          topLineRotateRef,
          {
            toValue: 0,
            duration: 5,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),

        Animated.timing(
          bottomLineRotateRef,
          {
            toValue: 0,
            duration: 5,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),

        Animated.parallel([
          Animated.timing(
            topLineRef,
            {
              toValue: lineWidth,
              duration: 550,
              easing: Easing.bounce,
              useNativeDriver: false
            }
          ),

          Animated.timing(
            middleLineRef,
            {
              toValue: lineWidth,
              duration: 400,
              easing: Easing.bounce,
              useNativeDriver: false
            }
          ),

          Animated.timing(
            bottomLineRef,
            {
              toValue: lineWidth,
              duration: 250,
              easing: Easing.bounce,
              useNativeDriver: false
            }
          ),
        ])
      ])
    ]).start()

  }

  const toogleAnimations = () => {
    setCurrentAnimation(!currentAnimation)
    setIsFirstAnimation(true)
  }


  useEffect(() => {
    if (isFirstAnimation) {
      currentAnimation ? startAnimation() : resetAnimation()
    }
  }, [currentAnimation])

  return {
    topLineAnimatedStyle,
    middleLineAnimatedStyle,
    bottomLineAnimatedStyle,
    toogleAnimations
  }
}