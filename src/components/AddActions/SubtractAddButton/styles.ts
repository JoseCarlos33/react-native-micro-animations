import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Animated, Button, TouchableHighlight, TouchableOpacity } from "react-native";
import { SubtractAddButtonProps } from './index';

export const ContainerPressable = styled.TouchableOpacity((props: SubtractAddButtonProps)=> ({
  width: props.width ? `${wp(props.width)}px` : `${wp(16)}px`,
  height: props.height ? `${wp(props.height)}px` : `${wp(16)}px`,
  backgroundColor: props.backgroundColor ? `${props.backgroundColor}` : "#75bf75",
  activeOpacity: 0.01,
  justifyContent: "center",
  alignItems: "center",
  padding: 7,
  borderRadius: props.borderRadius ? props.borderRadius : 30,
  //Shadow
  shadowColor: props.disableBoxShadow ? "transparent" : '#000000',
  shadowOffset: props.disableBoxShadow ? {} : { width: 5, height: 2},
  elevation: props.disableBoxShadow ? "0" : "2",
  shadowOpacity: props.disableBoxShadow ? "0" : "0.3",
  shadowRadius: props.disableBoxShadow ? "0" : "10px",
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
  height: 13%;
  background-color: ${(props: any) => props?.lineColor ? props?.lineColor : "#ededed"};
  border-radius: 2px;
`;
