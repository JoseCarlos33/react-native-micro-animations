
![cover](.github/logo.jpg)

# Demonstration
<p align="center">
  <img src=".github/demonstrationMenu.gif" 
  height="425">
  <img src=".github/demonstrationElasticButtonIcons.gif" 
  height="425">
  <img src=".github/demonstrationAddButtons.gif" 
  height="425">
</p>


## Installation

1. Install dependences: 
```js
  npm i react-native-micro-animations
```
### or
```js
  yarn add react-native-micro-animations
```

## Configuration
### As svg files are used in the micro animation library, it is necessary to install support libraries for these types of files, for that follow the steps below:

1. Install support dependences: 
```js
  yarn add react-native-svg && yarn add react-native-svg-transformer
```
2. In file metro.config.js replace all code for the following code below:
```js
const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
```
## `Menu` Component

### Usage

#### Animated Menu Vertically
```js
  const yourOnPressFunction = () => {
    console.log("Do something here...");
  }

  <AnimatedMenuVertically
    height={20}
    width={20}
    borderRadius={15}
    activeOpacity={0.6}
    backgroundColor={"#f5f5f5"}
    lineColor={"#343947"}
    onPress={yourOnPressFunction}
  />
```

#### Animated Menu Horizontally
```js
  const yourOnPressFunction = () => {
    console.log("Do something here...");
  }

  <AnimatedMenuHorizontally
    height={20}
    width={20}
    borderRadius={15}
    activeOpacity={0.6}
    backgroundColor={"#f5f5f5"}
    lineColor={"#343947"}
    onPress={yourOnPressFunction}
  />
```

### Properties

| Prop                 | Description                                  | Type           |
| -------------------- | -------------------------------------------- | -------------- |
| **`height`**         | Heigth of the button                         | _Number_       |
| **`width`**          | Width of the button                          | _Number_       |
| **`borderRadius`**   | BorderRadius of the button                   | _Number_       |
| **`backgroundColor`**| BackgroundColor of the button                | _String_       |
| **`lineColor`**      | Color of the Line component into the button  | _String_       |
| **`onPress`**        | Action when press the button                 | _() => Void_   |

<br></br>

## `Elastic Button` Components

### Usage

#### Animated Save Button
```js
  const yourOnPressFunction = () => {
    console.log("Do something here...");
  }

  <SaveElasticButton 
    height={45} 
    width={45}
    onPress={yourOnPressFunction}
  />
```

#### Animated Like Button
```js
  const yourOnPressFunction = () => {
    console.log("Do something here...");
  }

  <SaveElasticButton 
    height={45} 
    width={45}
    onPress={yourOnPressFunction}
  />
```

#### Animated Custom Button
```js
  import EyeNormal from '~/assets/icons/eye-regular.svg';
  import EyeSolid from '~/assets/icons/eye-slash-solid.svg';

  const yourOnPressFunction = () => {
    console.log("Do something here...");
  }

 <CustomElasticButton
    initIcon={<EyeNormal height={45} width={45} fill={"#000"} />}
    endIcon={<EyeSolid height={45} width={45} fill={"#000"}/>}                    
    onPress={yourOnPressFunction}
  />
```

## `Add Button` Components

### Usage

#### Parallax Add Button
```js
  import { ParallaxAddButton } from 'react-native-micro-animations';
  ...

  const yourOnPressFunction = () => {
    console.log("Do something here...");
  }
  ... 

  <ParallaxAddButton 
    height={15} 
    width={15}
    onPress={yourOnPressFunction}
  />
```

#### Rotate Add Button
```js
  import { RotateAddButton } from 'react-native-micro-animations';
  ...

  const yourOnPressFunction = () => {
    console.log("Do something here...");
  }
  ... 
  
  <RotateAddButton 
    height={15} 
    width={15}
    onPress={yourOnPressFunction}
  />
```

#### Subtract Add Button
```js
  import { SubtractAddButton } from 'react-native-micro-animations';
  ...

  const yourOnPressFunction = () => {
    console.log("Do something here...");
  }
  ... 
  
  <SubtractAddButton 
    height={15} 
    width={15}
    onPress={yourOnPressFunction}
  />
```

### Properties

| Prop                 | Description                                  | Type           |
| -------------------- | -------------------------------------------- | -------------- |
| **`height`**         | Heigth of the button                         | _Number_       |
| **`width`**          | Width of the button                          | _Number_       |
| **`borderRadius`**   | BorderRadius of the button                   | _Number_       |
| **`backgroundColor`**| BackgroundColor of the button                | _String_       |
| **`lineColor`**      | Color of the lines inside the button         | _String_       |
| **`onPress`**        | Action when press the button                 | _() => Void_   |


### Stack

- [x] React Native
- [x] Animated API
- [x] Typescript
- [x] Styled Components

## Autor

**José Carlos Noronha**

## LICENSE
[MIT](LICENSE) © 2022 José Carlos Noronha