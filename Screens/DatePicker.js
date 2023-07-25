import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a date:</Text>
      <DatePicker
        style={styles.datePicker}
        date={selectedDate}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate="2000-01-01"
        maxDate="2050-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            display: 'none',
          },
          dateInput: {
            borderWidth: 0,
          },
          // You can add more custom styles here
        }}
        onDateChange={date => setSelectedDate(date)}
      />
      <Text style={styles.selectedDate}>Selected Date: {selectedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  datePicker: {
    width: '100%',
    marginBottom: 20,
  },
  selectedDate: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default MyDatePicker;
