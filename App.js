import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class SignUp extends React.Component {
 
    state={
    name:'',
    email:'',
    password:'',
    phone:'',
    }
  

   onChangeText = (key, val) => {
    this.setState({
      ...this.state,
      [key]:val
    })
   
  }
 signUp=()=>{
  console.log(this.state.name)
  console.log(this.state.email)
  console.log(this.state.password)
 }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 10,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})