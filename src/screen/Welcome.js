import React from 'react'
import{View, Text, Button,Image,StyleSheet,} from 'react-native';


export default function WelcomeScreen({navigation}) {

  return (
    <View>
    <Text style={{fontWeight:'bold', marginHorizontal:100, fontSize:30,marginTop:30}}>Welcome to Red Bus</Text>
    <Text style ={{marginHorizontal:100,marginTop:30,color:'coral'}}>Hope you are well today</Text>
    {/* <Image
             style={{ width:"100%", height: 300 ,marginTop:40}}
            source={require('../../Images/guitor.png')}
            /> */}
      <View style={styles.screenContainer}>
      <Button title="Login"
       onPress={() => navigation.navigate('Login')}
        color='orange'
         />
    </View>
    
    {/* <View style={styles.screenContainer}>
   
    <Button title="Registration "
    onPress={() => navigation.navigate('user')}
    />
   
    </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    borderRadius: 30,
    justifyContent: "center",
    padding: 26,
    color: 'red'
  },
  buttonStyle: {
    background:'#000',
  }
})