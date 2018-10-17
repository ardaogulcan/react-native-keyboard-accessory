import React from 'react'
import PropTypes from 'prop-types';
import { Keyboard, Platform } from 'react-native'

export default class KeyboardAwareTabBarComponent extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    }
  }

  componentWillMount() {
    const keyboardShowEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const keyboardHideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    this.keyboardWillShowSub = Keyboard.addListener(keyboardShowEvent, this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener(keyboardHideEvent, this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    this.setState({
      isVisible: false
    })
  }

  keyboardWillHide = (event) => {
    this.setState({
      isVisible: true
    })
  }

  render() {
    const { TabBarComponent, ...componentProps } = this.props;
    const { isVisible } = this.state;

    return isVisible
      ? <TabBarComponent {...componentProps} />
      : null
  }
}

KeyboardAwareTabBarComponent.propTypes = {
  TabBarComponent: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ]).isRequired,
};
