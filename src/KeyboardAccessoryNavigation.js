import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  ViewPropTypes,
} from 'react-native';

import KeyboardAccessoryView from './KeyboardAccessoryView';
import AccessoryArrowButton from './components/AccessoryArrowButton';

class KeyboardAccessoryNavigation extends Component {
  handleDoneButton = () => {
    this.props.onDone && this.props.onDone();
    Keyboard.dismiss();
  }

  render() {
    const {
      nextButton,
      previousButton,
      doneButton,
      doneButtonTitle,
      infoContainer,
      infoMessage,
      tintColor,
      onNext,
      onPrevious,
      nextDisabled,
      previousDisabled,
      nextHidden,
      previousHidden,
      accessoryStyle,
      nextButtonStyle,
      previousButtonStyle,
      doneButtonStyle,
      doneButtonTitleStyle,
      infoMessageStyle,
      nextButtonDirection,
      previousButtonDirection,
      ...passThroughProps
    } = this.props;

    // Are both arrows hidden?
    const arrowsHidden = nextHidden && previousHidden;

    // Is there an info message/container?
    const noInfo = !infoMessage && !infoContainer;

    const accessoryContainerStyle = [
      styles.accessoryContainer,
      arrowsHidden && noInfo ? styles.accessoryContainerReverse : null,
      accessoryStyle,
    ];

    return (
      <KeyboardAccessoryView { ...passThroughProps }>
        <View style={accessoryContainerStyle}>
          { !arrowsHidden && (
            <View style={styles.leftContainer}>
              <AccessoryArrowButton
                style={[styles.previousButton, previousButtonStyle]}
                hidden={previousHidden}
                disabled={previousDisabled}
                direction={previousButtonDirection}
                customButton={previousButton}
                tintColor={tintColor}
                onPress={onPrevious}
              />
              <AccessoryArrowButton
                style={nextButtonStyle}
                hidden={nextHidden}
                disabled={nextDisabled}
                direction={nextButtonDirection}
                customButton={nextButton}
                tintColor={tintColor}
                onPress={onNext}
              />
            </View>
          )}
          { (infoMessage || infoContainer) && (
            <View style={styles.infoContainer}>
              {infoContainer || (
                <Text style={[infoMessageStyle, {
                  color: tintColor,
                }]}>
                  {infoMessage}
                </Text>
              )}
            </View>
          )}
          <TouchableOpacity
            style={[styles.doneButton, doneButtonStyle]}
            onPress={this.handleDoneButton}>
            { doneButton ||
              <Text style={[
                styles.doneButtonText,
                doneButtonTitleStyle,
                {
                  color: tintColor,
                }
              ]}>
                {doneButtonTitle}
              </Text>
            }
          </TouchableOpacity>
        </View>
      </KeyboardAccessoryView>
    );
  }
}

KeyboardAccessoryNavigation.propTypes = {
  ...KeyboardAccessoryView.propTypes,
  doneButtonTitle: PropTypes.string,
  infoMessage: PropTypes.string,
  doneButton: PropTypes.element,
  nextButton: PropTypes.element,
  previousButton: PropTypes.element,
  infoContainer: PropTypes.element,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onDone: PropTypes.func,
  nextDisabled: PropTypes.bool,
  previousDisabled: PropTypes.bool,
  doneDisabled: PropTypes.bool,
  nextHidden: PropTypes.bool,
  previousHidden: PropTypes.bool,
  tintColor: PropTypes.string,
  accessoryStyle: (View.propTypes||ViewPropTypes).style,
  previousButtonStyle: (View.propTypes||ViewPropTypes).style,
  nextButtonStyle: (View.propTypes||ViewPropTypes).style,
  doneButtonStyle: (View.propTypes||ViewPropTypes).style,
  doneButtonTitleStyle: Text.propTypes.style,
  infoMessageStyle: Text.propTypes.style,
  nextButtonDirection: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  previousButtonDirection: PropTypes.oneOf(['up', 'down', 'left', 'right']),
}

KeyboardAccessoryNavigation.defaultProps = {
  doneButtonTitle: 'Done',
  tintColor: '#007AFF',
  nextDisabled: false,
  previousDisabled: false,
  nextHidden: false,
  previousHidden: false,
  nextButtonDirection: 'down',
  previousButtonDirection: 'up',
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
  accessoryContainerReverse: {
    flexDirection: 'row-reverse',
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
  },
})

export default KeyboardAccessoryNavigation;
