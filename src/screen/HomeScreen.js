import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function HomeScreen(props) {
   const [category, setCategory] = useState('');
   const [subcategory, setSubCategory] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [checkAvailablity, setCheckAvailablity] = useState({
    source: '',
    destination: '',
    date:''
  })

  useEffect(()=>{
    props.route.params.setAvailablity(checkAvailablity)
  },[checkAvailablity])
  console.log('home', checkAvailablity);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('a date has been picked:', date);

    setCheckAvailablity({...checkAvailablity, date:date}),
    props.route.params.setAvailablity(checkAvailablity)
    hideDatePicker();
  };


  const categories = [
    {key: 1, value: 'Kolkata'},
    {key: 2, value: 'Delhi'},
    {key: 3, value: 'Pune'},
    {key: 4, value: 'Varanasi'},
    {key: 5, value: 'Banglore'},
    {key: 6, value: 'Hyderabad'},
  ];

  const subcategories = [
    {key: 1, value: 'Kolkata'},
    {key: 2, value: 'Delhi'},
    {key: 3, value: 'Pune'},
    {key: 4, value: 'Varanasi'},
    {key: 5, value: 'Banglore'},
    {key: 6, value: 'Hyderabad'},
  ];

  return (
    <>
      <View style={{paddingHorizontal: 30, paddingTop: 60}}>
        <SelectList
          setSelected={(data)=>setCheckAvailablity({...checkAvailablity, source: categories.find(x=>x.key===data)?.value})}
          data={categories}
           placeholder={"To"}
          defaultOption={{key: '1', value: 'from'}}
        />

        <SelectList
         setSelected={(data)=>setCheckAvailablity({...checkAvailablity, destination: subcategories.find(x=>x.key===data)?.value})}
          boxStyles={{marginTop: 30}}
          data={subcategories}
          placeholder={'Select categories'}
          defaultOption={{key: '1', value: 'To'}}
        />
      </View>

      <View style={styles.mainView}>
        <Button title="selectDate" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={{paddingTop: 60, paddingHorizontal: 30}}>
        <Button
          onPress={() => props.navigation.navigate('AvailableBus')}
          title="Search">
          Search
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifycontent: 'center',
    marginTop: 50,
  },
});
