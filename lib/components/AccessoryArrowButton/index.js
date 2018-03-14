import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
} from 'react-native';

import Arrow from '../Arrow';

const AccessoryArrowButton = ({ hidden = false, disabled = false, onPress, ...props }) => {
  if (hidden) {
    return null;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={props.style}
      onPress={onPress}>
      { props.customButton ? props.customButton : (
        <Arrow
          direction={props.direction}
          disabled={disabled}
          tintColor={props.tintColor} />
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
