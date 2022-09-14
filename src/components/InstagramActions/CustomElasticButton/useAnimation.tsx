import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

export default function CustomElasticButtonAnimation() {
  const [currentAnimation, setCurrentAnimation] = useState(false);
  const [isFirstAnimation, setIsFirstAnimation] = useState(false);

  let initIconRef = useRef(new Animated.Value(1)).current
  let endIconRef = useRef(new Animated.Value(0)).current

  let initIconAnimatedStyle = {
    transform: [{
      scale: initIconRef
    }]
  }

  let endIconAnimatedStyle = {
    transform: [{
      scale: endIconRef
    }]
  }

  function startAnimation() {
    Animated.parallel([
      Animated.timing(
        initIconRef,
        {
          toValue: 0,
          duration: 100,
          easing: Easing.elastic(1.7),
          useNativeDriver: false
        }
      ),
      Animated.timing(
        endIconRef,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.elastic(1.4),
          useNativeDriver: false
        }
      ),
    ]).start()
  }

  function resetAnimation() {
    initIconRef.setValue(0.5);
    endIconRef.setValue(1);

    Animated.parallel([
      Animated.timing(
        endIconRef,
        {
          toValue: 0,
          duration: 100,
          easing: Easing.elastic(1.7),
          useNativeDriver: false
        }
      ),
      Animated.timing(
        initIconRef,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.elastic(2),
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
    initIconAnimatedStyle,
    endIconAnimatedStyle,
    toogleAnimations
  }
}