import React, { Component } from "react";

import { StyleSheet, View, TextInput, Button, ScrollView } from "react-native";

import { KeyboardAccessoryView } from "../react-native-keyboard-accessory";

class ViewExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Button
            title="Go to Navigation Example"
            onPress={() => {
              this.props.navigation.navigate("NavigationViewExample");
            }}
          />
        </ScrollView>
        <KeyboardAccessoryView heightProperty="minHeight" alwaysVisible={true} androidAdjustResize>
          {({ isKeyboardVisible }) => (
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Write your message"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                multiline={true}
              />
              {isKeyboardVisible && (
                <Button
                  style={styles.textInputButton}
                  title="Send"
                  onPress={() => {}}
                />
              )}
            </View>
          )}
        </KeyboardAccessoryView>
      </View>
    );
  }
}

ViewExample.navigationOptions = {
  title: "View Example",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputView: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: "top",
  },
  textInputButton: {
    flexShrink: 1,
  },
});

export default ViewExample;
