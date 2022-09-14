import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background-color: #dbd5e0;
  padding: 30px 10px;
`;

export const AnimatedComponentBox = styled.View`
  align-items: center;
  justify-content: space-evenly;
  width: ${wp(100)}px;
  height: ${hp(70)}px;
`;

export const Box = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ToggleButton = styled.TouchableOpacity`
  padding: 0px 10px;
  background-color: ${(props: any) => props.backgroundColor ? props.backgroundColor : "#e1dae8"};
  border-color: ${(props: any) => props.borderColor ? props.borderColor : "#8f96a8"};
  border-width: 1px;
  border-radius: 20px;
  height: 30px;
  justify-content: center;
  margin-left: 10px;
`;

export const SectionComponentBox = styled.View`
  padding: 29px;
`;

export const AnimationCardBox = styled.View.attrs({
  shadowColor: '#52006A',
  shadowOffset: { width: 2, height: 2 },
  elevation: 2,
  shadowOpacity: 0.25,
  shadowRadius: 20,
})`
  background-color: #FAFAFA;
  border-radius: 10px;
  flex-direction: row;
  height: 100px;
  width: ${wp(85)}px;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12px;
`;