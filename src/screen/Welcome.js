import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <>
      <View
        style={{
          alignSelf: 'flex-end',
          borderRadius: 16,
          margin: 16,
        }}>
        <Button title="Logout" color={'red'} />
      </View>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            marginHorizontal: 100,
            fontSize: 30,
            marginTop: 30,
          }}>
          Welcome to Red Bus
        </Text>
        <Text
          style={{
            marginHorizontal: 100,
            marginTop: 30,
            color: 'blue',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Hope you are well today
        </Text>
        <Image
          style={{width: '90%', height: 320, marginTop: 40, marginLeft: 20}}
          source={{
            uri: 'https://camo.githubusercontent.com/8c5cb960f45cbed70d66ddf461227a093a79cf034bb2a58ee3e2fd7b74b8c575/68747470733a2f2f7777772e67726561746275797a2e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031372f31312f626f6f6b696e672d6275732d7469636b65742e6a7067',
          }}
        />
        <View style={styles.screenContainer}>
          <Button
            title="Click here to Book"
            onPress={() => navigation.navigate('Login')}
            color="blue"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    borderRadius: 30,
    justifyContent: 'center',
    padding: 26,
    color: 'red',
  },
});
