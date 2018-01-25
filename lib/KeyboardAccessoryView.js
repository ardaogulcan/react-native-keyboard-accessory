import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Keyboard,
    LayoutAnimation,
    Platform,
    StyleSheet,
} from 'react-native';

const accessoryAnimation = (duration, easing, animationConfig = null) => {

    if (animationConfig) {
        if (typeof animationConfig === 'function') {
            return animationConfig(duration, easing);
        }
        return animationConfig;
    }

    if (Platform.OS === 'android') {
        return {
            duration: 200,
            create: {
                duration: 200,
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity
            },
            update: {
                type: LayoutAnimation.Types.linear,
            }
        }
    }

    return LayoutAnimation.create(
        duration,
        LayoutAnimation.Types[easing],
        LayoutAnimation.Properties.opacity,
    )
}

class KeyboardAccessoryView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyboardHeight: 0,
            accessoryHeight: 50,
            isKeyboardVisible: false,
        }

        this.handleKeyboardShow = this.handleKeyboardShow.bind(this);
        this.handleKeyboardHide= this.handleKeyboardHide.bind(this);
    }

    componentWillMount () {
        const keyboardShowEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
        const keyboardHideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

        this.keyboardShowEventListener = Keyboard.addListener(keyboardShowEvent, this.handleKeyboardShow);
        this.keyboardHideEventListener = Keyboard.addListener(keyboardHideEvent, this.handleKeyboardHide);
    }

    componentWillUnmount() {
        this.keyboardShowEventListener.remove();
        this.keyboardHideEventListener.remove();
    }

    handleChildrenLayout(layoutEvent) {
        this.setState({
            accessoryHeight: layoutEvent.nativeEvent.layout.height,
        });
    }

    handleKeyboardShow(keyboardEvent) {
        if (!keyboardEvent.endCoordinates) {
            return;
        }

        const keyboardHeight = Platform.select({
            ios: keyboardEvent.endCoordinates.height,
            android: this.props.androidWindowSoftInputAdjustResize
              ? this.props.bumperHeight
              : keyboardEvent.endCoordinates.height
        });

        const keyboardAnimate = () => {
            const { animationConfig, animateOn } = this.props;

            if (animateOn === 'all' || Platform.OS === animateOn) {
                LayoutAnimation.configureNext(
                    accessoryAnimation(keyboardEvent.duration, keyboardEvent.easing, animationConfig)
                );
            }

            this.setState({
                isKeyboardVisible: true,
                keyboardHeight: keyboardHeight
            })
        };

        if (Platform.OS === 'ios' || typeof this.props.onKeyboardShowDelay !== 'number') {
            keyboardAnimate();
        } else {
            setTimeout(() => {
                keyboardAnimate()
            }, this.props.onKeyboardShowDelay);
        }
    }

    handleKeyboardHide(keyboardEvent) {
        const { animateOn, animationConfig } = this.props;

        if (animateOn === 'all' || Platform.OS === animateOn) {
            LayoutAnimation.configureNext(
                animationConfig || accessoryAnimation(keyboardEvent.duration, keyboardEvent.easing, animationConfig)
            );
        }

        this.setState({
            isKeyboardVisible: false,
            keyboardHeight: 0,
        })
    }

    render() {

        const { isKeyboardVisible , accessoryHeight, keyboardHeight } = this.state;
        const { bumperHeight, alwaysVisible, visibleOpacity, hiddenOpacity, style } = this.props;

        return (
            <View style={{ height: (isKeyboardVisible || alwaysVisible ? accessoryHeight : 0) }}>
                <View style={[styles.accessory, style, {
                    opacity: (isKeyboardVisible || alwaysVisible ? visibleOpacity : hiddenOpacity),
                    bottom: keyboardHeight - bumperHeight,
                    height: accessoryHeight + bumperHeight,
                }]}>
                    <View onLayout={this.handleChildrenLayout.bind(this)}>
                        { this.props.children }
                    </View>
                </View>
            </View>
        );
    }
}

KeyboardAccessoryView.propTypes = {
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ]),
    animateOn: PropTypes.oneOf(['ios', 'android', 'all', 'none']),
    animationConfig: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    alwaysVisible: PropTypes.bool,
    bumperHeight: PropTypes.number,
    visibleOpacity: PropTypes.number,
    hiddenOpacity: PropTypes.number,
    onKeyboardShowDelay: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.bool
    ]),
    androidWindowSoftInputAdjustResize: PropTypes.bool
}

KeyboardAccessoryView.defaultProps = {
    animateOn: 'ios',
    bumperHeight: 15,
    visibleOpacity: 1,
    hiddenOpacity: 0,
    androidWindowSoftInputAdjustResize: false
}

const styles = StyleSheet.create({
    accessory: {
        position: 'absolute',
        right: 0,
        left: 0,
        backgroundColor: '#EFF0F1'
    }
})

export default KeyboardAccessoryView;
