# react-native-keyboard-accessory
**!!!Work In Progress!!!**

A React Native Keyboard Accessory (View, Navigation) Component. Sticky views on keyboard.

<iframe src='https://gfycat.com/ifr/SafeRigidJunebug' frameborder='0' scrolling='no' width='748' height='1372' allowfullscreen></iframe>

## Installation
Installation can be done through ``npm``:

```shell
npm install react-native-keyboard-accessory --save
```

## Usage

You can use the ``KeyboardAccessoryView`` or the ``KeyboardAccessoryNavigation``
components.

### Keyboard Accessory View
Import ``react-native-keyboard-accessory``

```js
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'

```
And use it inside your ``render()`` function:

```jsx
<KeyboardAccessoryView>
  <View>
    <TextInput />
  </View>
</KeyboardAccessoryView>
```

***Important:*** KeyboardAccessoryView should be positioned inside the Root Element which is covering the screen, mostly the top most view styled as ``{ flex: 1 }``.

### Keyboard Accessory Navigation
Import ``react-native-keyboard-accessory``

```js
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'

```
And use it inside your ``render()`` function:

```jsx
<KeyboardAccessoryNavigation />
```

***Important:*** KeyboardAccessoryNavigation should be positioned inside the Root Element which is covering the screen, mostly the top most view styled as ``{ flex: 1 }``.

## API

### *KeyboardAccessoryView*
| **Prop** | **Type** | **Default** | **Description** |
|----------|----------|-------------|-----------------|
| `style` | `object` | `null` | Style `object` or `StyleSheet` reference which will be applied to Accessory `View` |
| `animateOn` | `enum:string` | `'ios'` | Enables show/hide animation on given platorm. Values: `['ios', 'android', 'all', 'none']`. | 
| `animationConfig` | `function` or `object` | `null` | For passing custom animations to show/hide. If given prop is function, `duration` and `easing` parameters from `Keyboard` event will be passed to the function, function should return `LayoutAnimation` compatible animation config. Or you can directlty pass animation config object. |
| `alwaysVisible` | `boolean` | `false` | When set to `true` Accessory View will be always visible at the bottom of the screen. Good for sticky `TextInput`'s |
| `bumperHeight` | `number` | 15 | Bumper height to prevent visiual glitches if animation couldn't keep up with the keyboard animation. |
| `visibleOpacity` | `number` | 1 | Opacity of the Accessory when it is visible. *Note:* Opacity is used for hiding the accessory to prevent render delays. |
| `hiddenOpacity` | `number` | 0 | Opacity of the Accessory when it is hidden. |

### *KeyboardAccessoryNavigation*
All the `KeyboardAccessoryView` props will be passed.

| **Prop** | **Type** | **Default** | **Description** |
|----------|----------|-------------|-----------------|
| `doneButtonTitle` | `string` | `'Done'` | Title text to show on the right Button of Navigation View |
| `tintColor` | `string` | `'#007AFF'` | Tint color for the arrows and done button | 
| `doneButton` | `node` | `null` | Replace default Done Button. Non-Touchable node should be provided. | 
| `nextButton` | `node` | `null` | Replace default Next Button. Non-Touchable node should be provided. |
| `previousButton` | `node` | `null` | Replace default Previous Button. Non-Touchable node should be provided. |
| `doneDisabled` | `boolean` | false | Disables Done Button |
| `nextDisabled` | `boolean` | false | Disables Next Button |
| `previousDisabled` | `boolean` | false | Disables Previous Button |
| `accessoryStyle` | `object` | null | Style object or StyleSheet reference which will be applied to Navigation Accessory `View`. |
| `doneButtonStyle` | `object` | null | Style object or StyleSheet reference which will be applied to Done Button `View` |
| `doneButtonTitleStyle` | `object` | null | Style object or StyleSheet reference which will be applied to Done Button `Text` |
| `previousButtonStyle` | `object` | 0 | Style object or StyleSheet reference which will be applied to Previous Button `View` |
| `nextButtonStyle` | `object` | 0 | Style object or StyleSheet reference which will be applied to Next Button `View` |
| `nextButtonDirection` | `enum:string` | `'down'` | Arrow direction for the Next Button. Values: `['down', 'up', 'right', 'left']`. |
| `previousButtonDirection` | `enum:string` | `'up'` | Arrow direction for the Previous Button. Values: `['down', 'up', 'right', 'left']`. |
| `onDone` | `function` | null | Triggered on Done Button `press` |
| `onNext` | `function` | null | Triggered on Next Button `press` |
| `onPrevious` | `function` | null | Triggered on Previous Button `press` |

  ## Known Issues

  - Accessory doesn't follow keyboard when closed with drag gesture. 
