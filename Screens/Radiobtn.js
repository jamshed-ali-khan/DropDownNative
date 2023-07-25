import {View, Text, TouchableOpacity, text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

export default function Radiobtn() {
  const [radio, setRadio] = useState(radio);
  const [check, setcheck] = useState(check);
  const [text, settext] = useState('');

  const handleRadioPress = value => {
    setRadio(value);
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setRadio(!radio)}>
        <View style={styles.wraper}>
          <View style={styles.radio}>
            {radio === true ? <View style={styles.radiobg}></View> : null}
          </View>
          <Text style={styles.radiotxt}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRadio(!radio)}>
        <View style={styles.wraper}>
          <View style={styles.radio}>
            {radio === false ? <View style={styles.radiobg}></View> : null}
          </View>
          <Text style={styles.radiotxt}>Radio 2</Text>
        </View>
      </TouchableOpacity>

      <Text>CheckBox</Text>
      <TouchableOpacity
        onPress={() => {
          setcheck(!check);
        }}>
        <View style={styles.mainchk}>
          <View style={styles.cntentchk}>
            {check === true ? <View style={styles.bg}></View> : null}
          </View>
        </View>
      </TouchableOpacity>
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, width: 120}}
          placeholder="type here"
          mode="outlined"
          onChangeText={() => settext(text)}
        />

        <Text style={{padding: 10, fontSize: 20}}>
          {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radiotxt: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  wraper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobg: {
    backgroundColor: 'red',
    height: 28,
    width: 28,
    margin: 4,
    borderRadius: 20,
  },
  mainchk: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  cntentchk: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: 'red',
    margin: 20,
  },
  bg: {
    height: 25,
    width: 25,
    backgroundColor: 'red',
    margin: 0.5,
  },
});
