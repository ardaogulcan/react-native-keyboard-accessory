import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Image
} from 'react-native';

import ArrowImage from './arrow.ios.png';

const directionMap = {
  down: '0deg',
  left: '90deg',
  up: '180deg',
  right: '270deg',
}

class Arrow extends Component {
  render() {
    const { direction, tintColor, disabled } = this.props;
    return (
      <Image
        style={[ styles.arrowImage, {
          ...(disabled ? { opacity: 0.5 } : {}),
          tintColor,
          transform: [{
            rotate: directionMap[direction]
          }]
        }]}
        source={ArrowImage} />
    );
  }
}

Arrow.propTypes = {
  direction: PropTypes.oneOf(['down', 'up', 'left', 'right']),
  tintColor: PropTypes.string,
  disabled: PropTypes.bool,
}

Arrow.defaultProps = {
  direction: 'down',
  tintColor: '#007AFF',
  disabled: false,
}


const styles = StyleSheet.create({
  arrowImage: {
    width: 21,
    height: 12,
  }
});

export default Arrow;
