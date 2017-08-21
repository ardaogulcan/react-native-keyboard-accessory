import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import KeyboardAccessoryView from './KeyboardAccessoryView';
import Arrow from './components/Arrow';

class KeyboardAccessoryNavigation extends Component {

  handleDoneButton() {
    this.props.onDone && this.props.onDone();
    Keyboard.dismiss();
  }

  render() {
    const {
      nextButton,
      previousButton,
      doneButton,
      doneButtonTitle,
      tintColor,
      onNext,
      onPrevious,
      nextDisabled,
      previousDisabled,
      style,
      accessoryStyle,
      nextButtonStyle,
      previousButtonStyle,
      doneButtonStyle,
      doneButtonTitleStyle,
      nextButtonDirection,
      previousButtonDirection,
    } = this.props;
    return (
      <KeyboardAccessoryView {...(style ? { style } : {})}>
        <View style={[styles.accessoryContainer, accessoryStyle]}>
          <View style={styles.leftContainer}>
            <TouchableOpacity
              disabled={previousDisabled}
              style={[styles.previousButton, previousButtonStyle]}
              onPress={onPrevious} >
              { previousButton ? previousButton : (
                <Arrow
                  direction={previousButtonDirection}
                  disabled={previousDisabled}
                  tintColor={ tintColor } />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              disabled={nextDisabled}
              {...(style ? { style: nextButtonStyle } : {})}
              onPress={onNext} >
              { nextButton ? nextButton : (
                <Arrow
                  direction={nextButtonDirection}
                  disabled={nextDisabled}
                  tintColor={ tintColor } />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.doneButton, doneButtonStyle]}
            onPress={this.handleDoneButton.bind(this)} >
            { doneButton ? doneButton : (
              <Text style={[ styles.doneButtonText, doneButtonTitleStyle, {
                color: tintColor,
              }]}>
                {doneButtonTitle}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAccessoryView>
    );
  }
}

KeyboardAccessoryNavigation.propTypes = {
  doneButtonTitle: PropTypes.string,
  doneButton: PropTypes.element,
  nextButton: PropTypes.element,
  previousButton: PropTypes.element,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onDone: PropTypes.func,
  nextDisabled: PropTypes.bool,
  previousDisabled: PropTypes.bool,
  doneDisabled: PropTypes.bool,

  tintColor: PropTypes.string,
  style: PropTypes.any,
  accessoryStyle: PropTypes.any,
  previousButtonStyle: PropTypes.any,
  nextButtonStyle: PropTypes.any,
  doneButtonStyle: PropTypes.any,
  doneButtonTitleStyle: PropTypes.any,
  nextButtonDirection: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  previousButtonDirection: PropTypes.oneOf(['up', 'down', 'left', 'right']),
}

KeyboardAccessoryNavigation.defaultProps = {
  doneButtonTitle: 'Done',
  tintColor: '#007AFF',
  nextDisabled: false,
  previousDisabled: false,
  nextButtonDirection: 'down',
  previousButtonDirection: 'up'
}

const styles = StyleSheet.create({
  accessoryContainer: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previousButton: {
    marginRight: 16,
  },
  doneButtonText: {
    fontWeight: 'bold'
  }
})

export default KeyboardAccessoryNavigation;