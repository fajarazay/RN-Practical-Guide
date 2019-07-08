import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

class PlaceInput extends Component {

    state = {
        placeName: ""
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
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
        );
    }
}

const styles = StyleSheet.create({
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
    },
})
export default PlaceInput;