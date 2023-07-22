import {
  View,
  Text,
  text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
// import {Icon} from 'react-native-paper/lib/typescriatar/Avatar';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Login() {
  return (
    <View style={{flex: 1, backgroundColor: '#1253AA'}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../Images/Checkmark.png')}
          style={{tintColor: '#fff',}}
        />
        <Text> WelCome</Text>
      </View>
      <View style={{width: 300}}>
        <TextInput
          label="E-mail"
          value={text}
          mode="outlined"
          placeholder="Enter Your Email"
          //   right={}
        />
        {/* <Icon name="eye" style={w} /> */}
        <TextInput
          label="Password"
          value={text}
          mode="outlined"
          placeholder="Enter Your Email"
          secureTextEntry={true}
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
      <Text>forget Password</Text>
      <TouchableOpacity style={styles.btn}>
        <Text>Press Here</Text>
      </TouchableOpacity>

      <Button
        // onPress={onPressLearnMore}
        title="Learn More"
        // color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
styles = StyleSheet.create({
  btm: {
    marginTop: 10,
    fontSize: 25,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'blue',
    margin: 6,
  },
});
