
![cover](.github/logo.jpg)

# Demonstration
<p align="center">
  <img src=".github/demonstrationMenu.gif" 
  height="425">
</p>


## Installation

1. Install dependences: 
```js
  yarn
```

2. For ios platform, run before start: 
```js
  cd ios && pod install
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


### Stack

- [x] React Native
- [x] Animated API
- [x] Typescript
- [x] Styled Components

## Autor

**José Carlos Noronha**