import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
} from 'react-native';

import Arrow from '../Arrow';

const AccessoryArrowButton = ({
  hidden = false,
  disabled = false,
  onPress,
  customButton,
  direction,
  tintColor,
  ...passThroughProps
}) => {
  if (hidden) {
    return null;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      {...passThroughProps}>
      { customButton ? customButton : (
        <Arrow
          direction={direction}
          disabled={disabled}
          tintColor={tintColor} />
      )}
    </TouchableOpacity>
  );
}

AccessoryArrowButton.propTypes = {
  customButton: PropTypes.element,
  tintColor: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default AccessoryArrowButton;
