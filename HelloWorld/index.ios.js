/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var HelloWorld = React.createClass({
  getInitialState: function () {
    return {
      name: 'World'
    }
  },
  onNameChange: function (event) {
    this.setState({ name : event.nativeEvent.text});
  },
  render: function () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.nameInput}
          onChange={this.onNameChange}
          placeholder = 'Who should be greeted?'/>
        <Text style={styles.welcome}>
          Hello, {this.state.name}!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.io.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  nameInput: {
    height: 36,
    padding: 4,
    margin: 24,
    fontSize: 18,
    borderWidth: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
