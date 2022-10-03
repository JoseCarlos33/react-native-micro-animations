import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Animated } from "react-native";

export const ContainerPressable = styled.TouchableOpacity((props: any) => ({
  width: props.width ? `${wp(props.width)}px` : `${wp(15)}px`,
  height: props.height ? `${wp(props.height)}px` : `${wp(15)}px`,
  backgroundColor: "#trans",
  activeOpacity: props.activeOpacity ? props.activeOpacity : 0.2,
  justifyContent: "center",
  alignItems: "center",
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
