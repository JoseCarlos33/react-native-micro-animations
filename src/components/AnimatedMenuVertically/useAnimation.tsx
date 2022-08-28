import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

export default function useAnimationVertically() {
  const [currentAnimation, setCurrentAnimation] = useState(false);
  const [isFirstAnimation, setIsFirstAnimation] = useState(false);

  let topLineRef = new Animated.Value(0)
  let middleLineRef = new Animated.Value(1)
  let bottomLineRef = new Animated.Value(0)

  let topLineRotateRef = new Animated.Value(0)
  let bottomLineRotateRef = new Animated.Value(0)

  const spinTop = topLineRotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
    easing: Easing.ease
  })

  const spinBottom = topLineRotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-45deg'],
    easing: Easing.ease
  })


  let topLineAnimatedStyle = {
    transform: [
      {
        translateY: topLineRef
      },
      { rotate: spinTop },
    ]
  }

  let bottomLineAnimatedStyle = {
    transform: [
      {
        translateY: bottomLineRef
      },
      {
        rotate: spinBottom
      }
    ]
  }

  let middleLineAnimatedStyle = {
    opacity: middleLineRef
  }

  function startAnimation() {

    Animated.parallel([
      Animated.timing(
        topLineRotateRef,
        {
          toValue: 1,
          duration: 600,
          easing: Easing.back(1),
          useNativeDriver: false
        }
      ),
      Animated.timing(
        bottomLineRotateRef,
        {
          toValue: 1,
          duration: 600,
          easing: Easing.back(1),
          useNativeDriver: false
        }
      ),
    ]).start()

    Animated.timing(
      middleLineRef,
      {
        toValue: 0,
        duration: 400,
        easing: Easing.ease,
        useNativeDriver: false
      }
    ).start(),

      Animated.parallel([
        Animated.timing(
          topLineRef,
          {
            toValue: 69,
            duration: 400,
            easing: Easing.cubic,
            useNativeDriver: false
          }
        ),
        Animated.timing(
          bottomLineRef,
          {
            toValue: - 69,
            duration: 400,
            easing: Easing.cubic,
            useNativeDriver: false
          }
        ),
      ]).start()
  }

  function resetAnimation() {
    topLineRef.setValue(69)
    bottomLineRef.setValue(-69)
    topLineRotateRef.setValue(1)
    bottomLineRotateRef.setValue(1)
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          topLineRotateRef,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.back(1),
            useNativeDriver: false
          }
        ),
        Animated.timing(
          bottomLineRotateRef,
          {
            toValue: 0,
            duration: 400,
            easing: Easing.back(1),
            useNativeDriver: false
          }
        ),
      ]),
      
      Animated.parallel([
        Animated.timing(
          middleLineRef,
          {
            toValue: 1,
            duration: 400,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),
        Animated.timing(
          topLineRef,
          {
            toValue: 0,
            duration: 500,
            easing: Easing.back(1),
            useNativeDriver: false
          }
        ),
        Animated.timing(
          bottomLineRef,
          {
            toValue: 0,
            duration: 500,
            easing: Easing.back(1),
            useNativeDriver: false
          }
        ),
      ])]).start()

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