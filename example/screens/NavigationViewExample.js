import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { KeyboardAccessoryNavigation } from '../react-native-keyboard-accessory';

class ViewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeInputRef: null,
      nextFocusDisabled: false,
      previousFocusDisabled: false,
    };
  }

  handleFocus(ref) {
    this.setState({
      nextFocusDisabled: ref === 3,
      previousFocusDisabled: ref === 1,
      activeInputRef: ref,
    });
  }

  changeInputFocus(direction = 1) {
    if ((this.state.nextFocusDisabled && direction === 1) ||
        (this.state.previousFocusDisabled && direction === -1)) {
      return;
    }

    const focusingRef = this.state.activeInputRef + direction;
    this.refs[`${focusingRef}`].focus();
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.contentContainer}>
          <TextInput
            style={styles.textInput}
            ref="1"
            placeholder="Dummy Text Input"
            blurOnSubmit={false}
            onFocus={this.handleFocus.bind(this, 1)} />
          <TextInput
            style={styles.textInput}
            ref="2"
            keyboardType="email-address"
            placeholder="Dummy Text Input Email"
            blurOnSubmit={false}
            onFocus={this.handleFocus.bind(this, 2)} />
          <TextInput
            style={styles.textInput}
            ref="3"
            keyboardType="numeric"
            placeholder="Dummy Text Input Numeric"
            blurOnSubmit={false}
            onFocus={this.handleFocus.bind(this, 3)} />
        </KeyboardAwareScrollView>
        <KeyboardAccessoryNavigation
          nextDisabled={this.state.nextFocusDisabled}
          previousDisabled={this.state.previousFocusDisabled}
          onNext={this.changeInputFocus.bind(this, 1)}
          onPrevious={this.changeInputFocus.bind(this, -1)}/>
      </View>
    );
  }
}
ViewExample.navigationOptions = {
  title: 'Navigation View Example',
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    padding: 30,
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CCC',
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ViewExample;
