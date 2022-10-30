import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

export default function useRotateAddButtonAnimation(lineBoxWidth: number) {
  const [currentAnimation, setCurrentAnimation] = useState(false);
  const [isFirstAnimation, setIsFirstAnimation] = useState(false);
  const lineWidth = lineBoxWidth ? lineBoxWidth * 0.7 : 0;
  let verticalLineRotateRef = useRef(new Animated.Value(0)).current
  let horizontalLineRotateRef = useRef(new Animated.Value(0)).current

  const spinVerticalLine = verticalLineRotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '-45deg'],
    easing: Easing.bezier(.47,.62,.02,1.17)
  })

  const spinHorizontalLine = horizontalLineRotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-135deg'],
    easing: Easing.bezier(.47,.62,.02,1.17)
  })

  let verticalLineAnimatedStyle = {
    heigth: "100%",
    width: lineWidth,
    position: "absolute",
    transform: [{
      rotate: spinVerticalLine
    }]
  }

  let horizontalLineAnimatedStyle = {
    heigth: lineWidth,
    width: lineWidth,
    position: "absolute",
    transform: [{
      rotate: spinHorizontalLine
    }]
  }


  function startAnimation() {
      Animated.parallel([
        Animated.timing(
          verticalLineRotateRef,
          {
            toValue: 1,
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),
        Animated.timing(
          horizontalLineRotateRef,
          {
            toValue: 1,
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: false
          }
        ),
      ]).start()
  }

  function resetAnimation() {
    verticalLineRotateRef.setValue(1);
    horizontalLineRotateRef.setValue(1);
    Animated.parallel([
      Animated.timing(
        verticalLineRotateRef,
        {
          toValue: 0,
          duration: 600,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ),
      Animated.timing(
        horizontalLineRotateRef,
        {
          toValue: 0,
          duration: 600,
          easing: Easing.ease,
          useNativeDriver: false
        }
      ),
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
    verticalLineAnimatedStyle,
    horizontalLineAnimatedStyle,
    toogleAnimations
  }
}