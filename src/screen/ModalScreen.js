import React from 'react';
import {Button, View, Text, Modal, TextInput, StyleSheet} from 'react-native';

class ModalScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      showSuccess: false,
    };
  }
  render() {
    return (
      <View>
        <Modal transparent={true} visible={this.state.show}>
          <View style={styles.container} />
          {this.state.showSuccess ? (
            <View
              style={{
                position: 'absolute',
                top: 140,
                zIndex: 1,
                left: 120,
                marginTop: 100,
              }}>
              <Text style={{fontSize: 40}}>Successs !</Text>
              <Button
                title="Okay"
                onPress={() => {
                  this.props.setShowModal(false);
                }}
              />
            </View>
          ) : (
            <View style={{position: 'absolute', top: 40, zIndex: 1, left: 20}}>
              <TextInput
                style={styles.form}
                placeholder="number of seat"
                onChange={text => {
                  this.setState({email: text});
                }}
              />
              <TextInput
                style={styles.form}
                placeholder="Enter Email"
                onChange={text => {
                  this.setState({email: text});
                }}
              />
              <TextInput
                style={styles.form}
                placeholder="phone number"
                onChange={text => {
                  this.setState({email: text});
                }}
              />
              <TextInput
                style={styles.form}
                placeholder=" enter Age"
                onChange={text => {
                  this.setState({email: text});
                }}
              />
              <TextInput
                style={styles.form}
                placeholder=" Enter Gender"
                onChange={text => {
                  this.setState({email: text});
                }}
              />
              <View
                style={{position: 'absolute', top: 480, zIndex: 1, left: 20}}>
                <Button
                  title="Cancel Ticket"
                  onPress={() => {
                    this.props.setShowModal(false);
                  }}
                />
              </View>

              <View
                style={{position: 'absolute', top: 480, zIndex: 1, left: 220}}>
                <Button
                  title="Book Ticket"
                  onPress={() => {
                    this.setState({showSuccess: true});
                  }}
                />
              </View>
            </View>
          )}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '80%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginLeft: 20,
    marginTop: 20,
    borderRadious: 50,
  },
  form: {
    borderWidth: 2,
    margin: 20,
    color: 'blue',
    borderRadius: 20,
    width: '150%',
    paddingHorizontal: 10,
    fontSize: 20,
    borderColor: 'red',
  },
});

export default ModalScreen;
