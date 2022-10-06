import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Animated } from "react-native";
import { ParallaxButtonProps } from './index';

export const ContainerPressable = styled.TouchableOpacity((props: ParallaxButtonProps) => ({
  width: props.width ? `${wp(props.width)}px` : `${wp(16)}px`,
  height: props.height ? `${wp(props.height)}px` : `${wp(16)}px`,
  backgroundColor: props.backgroundColor ? `${props.backgroundColor}` : "#FAFAFA",
  activeOpacity: props.activeOpacity ? props.activeOpacity : 0.2,
  justifyContent: "center",
  alignItems: "center",
  padding: 5,
  borderRadius: props.borderRadius ? props.borderRadius : 30,
  //Shadow
  shadowColor: props.disableBoxShadow ? "transparent" : '#878787',
  shadowOffset: props.disableBoxShadow ? {} : { width: 2, height: 5},
  elevation: props.disableBoxShadow ? "0" : "2",
  shadowOpacity: props.disableBoxShadow ? "0" : "0.25",
  shadowRadius: props.disableBoxShadow ? "0" : "8px",
}));

export const LinesBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Line = styled(Animated.View)`
  width: 100%;
  height: 17%;
  background-color: ${(props: any) => props?.lineColor ? props?.lineColor : "#343947"};
  border-radius: 20px;
`;
