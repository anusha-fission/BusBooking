import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BusData from '../constant/BusData';


export default function AvailbleBusScreen(props) {
  const data = props.route.params.availablity;
  console.log(data.source, data.destination, BusData[0].source, BusData[0].destination )

  const availableBus = BusData.filter((bus)=> bus.source===data.source && bus.destination===data.destination)

  return (
    <>
    <ScrollView>
      {availableBus.map((bus)=>
       ( <TouchableOpacity style={[styles.item, styles.big]}>
          <Text style={styles.text}>{bus.busName}</Text>
          <Text style={styles.subtext}>{bus.time}</Text>
          <Text style={styles.subtext}>{bus.seatLength - bus?.reservation.filter(b=>b.date === data.date.toISOString().substring(0,10)).map(b=> b.seatReserved).flat().length}</Text>
        </TouchableOpacity>
       )
      )
        
      }

     
      

      

       

        
      </ScrollView>
      
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    marginTop: 30,
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    height: 120,
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
    // padding: 20,
    // marginLeft:-150,
  },
  subtext: {
    color: '#000000',
    fontSize: 14,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'left',
  },
  big: {
    backgroundColor: '#EC7663',
  },
 
});