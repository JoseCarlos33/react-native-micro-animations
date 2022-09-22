
![cover](.github/logo.jpg)

# Demonstration
<p align="center">
  <img src=".github/demonstrationMenu.gif" 
  height="425">
  <img src=".github/demonstrationElasticButtonIcons.gif" 
  height="425">
</p>


## Installation

1. Install dependences: 
```js
  npm i react-native-micro-animations
```
### or
```js
  yarn react-native-micro-animations
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

## `Elastic Button ` Components

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

### Stack

- [x] React Native
- [x] Animated API
- [x] Typescript
- [x] Styled Components

## Autor

**José Carlos Noronha**