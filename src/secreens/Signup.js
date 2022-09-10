import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signupAction} from '../../store/signup-slice';
import userlist from './userlist';
import {authActions} from '../../store/auth-slice';

const Signup = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeText = e => {
    setUserId(e);
    console.log(userId);
  };
  const handleChangePassword = e => {
    setPassword(e);
    console.log(password);
  };
  const Login = () => {
    if(userId.length>0&&password.length>0){
      console.log(userId);
      console.log(password);

      const usfind = userlist.find(
        item =>
          item.userid === userId.trim() && item.password === password.trim(),
      );
      if (usfind) {
      } else {
        userlist.push({userid: userId, password: password});
        dispatch(authActions.login());
      }
    }
    else{

    }
  };
  const LoginScreen = () => {
    dispatch(signupAction.hide());
  };
  return (
    <View style={styles.mainview}>
      <Text style={styles.heading}>SignUp</Text>
      <TextInput
        placeholder="User ID"
        style={styles.inputfield}
        // value={userId}
        onChangeText={handleChangeText}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputfield}
        // value={password}
        onChangeText={handleChangePassword}
      />
      <Button title="SignUp" onPress={Login} />
      <Button title="Login" onPress={LoginScreen} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  inputfield: {
    borderWidth: 1,
    width: 300,
    margin: 30,
    color: 'black',
  },
});
