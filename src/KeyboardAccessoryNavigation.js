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
      doneButtonHitslop,
      infoMessageStyle,
      nextButtonDirection,
      nextButtonHitslop,
      previousButtonDirection,
      previousButtonHitslop,
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
                hitSlop={previousButtonHitslop}
                customButton={previousButton}
                tintColor={tintColor}
                onPress={onPrevious}
              />
              <AccessoryArrowButton
                style={nextButtonStyle}
                hidden={nextHidden}
                disabled={nextDisabled}
                direction={nextButtonDirection}
                hitSlop={nextButtonHitslop}
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
            onPress={this.handleDoneButton}
            hitSlop={doneButtonHitslop}>
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
  accessoryStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  previousButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  nextButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  doneButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  doneButtonTitleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  doneButtonHitslop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
    }),
  ]),
  infoMessageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  nextButtonDirection: PropTypes.oneOf(["up", "down", "left", "right"]),
  nextButtonHitslop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
    }),
  ]),
  previousButtonDirection: PropTypes.oneOf(["up", "down", "left", "right"]),
  previousButtonHitslop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
    }),
  ]),
};

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
