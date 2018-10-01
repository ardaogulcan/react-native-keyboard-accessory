import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Switch,
  Text,
} from 'react-native';

import { KeyboardAccessoryNavigation } from '../react-native-keyboard-accessory';

let inputs = [
  {
    placeholder: 'Dummy Text Input',
  },
  {
    keyboardType: 'email-address',
    placeholder: 'Dummy Text Input Email',
  },
  {
    keyboardType: 'numeric',
    placeholder: 'Dummy Text Input Numeric',
  },
  {
    placeholder: 'Dummy Text Input',
  },
  {
    keyboardType: 'email-address',
    placeholder: 'Dummy Text Input Email',
  },
  {
    keyboardType: 'numeric',
    placeholder: 'Dummy Text Input Numeric',
  },
];

class ViewExample extends Component {
  constructor(props) {
    super(props);

    inputs = inputs.map(input => ({
      ref: React.createRef(),
      ...input,
    }));

    this.state = {
      activeInputIndex: 0,
      nextFocusDisabled: false,
      previousFocusDisabled: false,
      buttonsDisabled: false,
      buttonsHidden: false,
    };
  }

  handleFocus = index => () => {
    this.setState({
      nextFocusDisabled: index === inputs.length - 1,
      previousFocusDisabled: index === 0,
      activeInputIndex: index,
    });
  }

  handleFocusNext = () => {
    const { nextFocusDisabled, activeInputIndex } = this.state;
    if (nextFocusDisabled) {
      return;
    }

    inputs[activeInputIndex + 1].ref.current.focus();
  }

  handleFocusPrevious = () => {
    const { previousFocusDisabled, activeInputIndex } = this.state;
    if (previousFocusDisabled) {
      return;
    }

    inputs[activeInputIndex - 1].ref.current.focus();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.switchInput}>
            <Switch
              value={this.state.buttonsHidden}
              onValueChange={() => {
                this.setState({
                  buttonsHidden: !this.state.buttonsHidden
                })
              }}
            />
            <Text style={styles.switchInputText}>
              Hide arrows
            </Text>
          </View>
          { inputs.map(({ placeholder, keyboardType, ref }, index) =>
            <TextInput
              key={`input_${index}`}
              ref={ref}
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder={placeholder}
              keyboardType={keyboardType}
              blurOnSubmit={false}
              onFocus={this.handleFocus(index)}
            />
          )}
        </ScrollView>
        <KeyboardAccessoryNavigation
          avoidKeyboard={true}
          nextDisabled={this.state.nextFocusDisabled}
          previousDisabled={this.state.previousFocusDisabled}
          nextHidden={this.state.buttonsHidden}
          previousHidden={this.state.buttonsHidden}
          onNext={this.handleFocusNext}
          onPrevious={this.handleFocusPrevious}
        />
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
  switchInput: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  switchInputText: {
    alignSelf: 'center',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ViewExample;
