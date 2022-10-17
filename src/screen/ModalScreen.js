import React from 'react';
import {
  Button,
  ScrollView,
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';

class ModalScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      showSuccess: false,
    };
  }
  render() {
    return (
      <Modal transparent={true} visible={this.state.show}>
        <View style={[styles.container]} />
        <View
          style={[
            styles.modal,
            {
              top: this.state.showSuccess ? '30%' : '10%',
              bottom: this.state.showSuccess ? '30%' : '10%',
            },
          ]}>
          {this.state.showSuccess ? (
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 24, marginBottom: 30}}>Successs !</Text>
              <Button
                title="Okay"
                onPress={() => {
                  this.props.setShowModal(false);
                }}
              />
            </View>
          ) : (
            <View>
              <ScrollView>
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
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Button
                    title="Cancel Ticket"
                    onPress={() => {
                      this.props.setShowModal(false);
                    }}
                  />

                  <Button
                    title="Book Ticket"
                    onPress={() => {
                      this.setState({showSuccess: true});
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modal: {
    position: 'absolute',
    left: 20,
    right: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 16,
  },
  form: {
    borderWidth: 2,
    margin: 20,
    color: 'blue',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 20,
    borderColor: 'red',
  },
});

export default ModalScreen;
