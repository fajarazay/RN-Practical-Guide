/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

console.disableYellowBox = true;

//const App = () => {
export default class App extends Component<Props> {

  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((
      place, index) => <Text key={index}>{place}</Text>
    );

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <TextInput
                  underlineColorAndroid='red'
                  style={styles.placeInput}
                  placeholder="type here"
                  value={this.state.placeName}
                  onChangeText={this.placeNameChangedHandler} >
                </TextInput>
                <Button
                  color='red'
                  style={styles.placeButton}
                  title="Add"
                  onPress={this.placeSubmitHandler}></Button>
              </View>
              <View>
                {placesOutput}
              </View>
            </View>

          </ScrollView>
        </SafeAreaView>
      </Fragment >
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    //backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

//export default App;
