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
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
console.disableYellowBox = true;

//const App = () => {
export default class App extends Component<Props> {

  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName,
          image: {
            uri: "https://cdn-images-1.medium.com/max/1200/1*ub1DguhAtkCLvhUGuVGr6w.png"
          }

        })
      }
    })
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key
        })
      }
    }
    )
  }

  render() {

    return (
      // <Fragment>
      //   <StatusBar barStyle="dark-content" />
      //   <SafeAreaView>
      //     <ScrollView
      //       contentInsetAdjustmentBehavior="automatic"
      //       style={styles.scrollView}>
      //       <Header />
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        ></PlaceList>
      </View>

      //     </ScrollView>
      //   </SafeAreaView>
      // </Fragment >
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

});
