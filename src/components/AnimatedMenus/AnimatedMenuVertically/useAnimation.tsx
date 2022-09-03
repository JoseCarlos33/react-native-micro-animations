import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { linePositionRefsProps } from '.';

export default function useAnimationVertically(linePositionRefs: linePositionRefsProps) {
  const [currentAnimation, setCurrentAnimation] = useState(false);
  const [isFirstAnimation, setIsFirstAnimation] = useState(false);
  const middlePosition = linePositionRefs["bottomLinePosition"]! - linePositionRefs["middleLinePosition"]!

  let topLineRef = useRef(new Animated.Value(0)).current
  let middleLineRef = useRef(new Animated.Value(1)).current
  let bottomLineRef = useRef(new Animated.Value(0)).current

  let topLineRotateRef = useRef(new Animated.Value(0)).current
  let bottomLineRotateRef = useRef(new Animated.Value(0)).current

  const spinTop = topLineRotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
    easing: Easing.ease
  })

  const spinBottom = bottomLineRotateRef.interpolate({
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
          duration: 500,
          easing: Easing.back(1),
          useNativeDriver: false
        }
      ),
      Animated.timing(
        bottomLineRotateRef,
        {
          toValue: 1,
          duration: 500,
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
            toValue: middlePosition,
            duration: 300,
            easing: Easing.elastic(1),
            useNativeDriver: false
          }
        ),
        Animated.timing(
          bottomLineRef,
          {
            toValue: - middlePosition,
            duration: 300,
            easing: Easing.elastic(1),
            useNativeDriver: false
          }
        ),
      ]).start()
  }

  function resetAnimation() {
    topLineRef.setValue(middlePosition)
    bottomLineRef.setValue(-middlePosition)
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
            duration: 300,
            easing: Easing.elastic(1),
            useNativeDriver: false
          }
        ),
        Animated.timing(
          bottomLineRef,
          {
            toValue: 0,
            duration: 300,
            easing: Easing.elastic(1),
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