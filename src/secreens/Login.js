import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {authActions} from '../../store/auth-slice';
import userlist from './userlist';
import {signupAction} from '../../store/signup-slice';
const Login = ({navigation}) => {
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
    console.log(userId);
    console.log(password);
    const usfind = userlist.find(
      item =>
        item.userid === userId.trim() && item.password === password.trim(),
    );
    if (usfind) {
      dispatch(authActions.login());
    } else {
    }
  };
  const signUP = () => {
    dispatch(signupAction.show());
  };
  return (
    <View style={styles.mainview}>
      <Text style={styles.heading}>Login</Text>
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
      <Button title="Login" onPress={Login} />
      <Button title="Sign UP" onPress={signUP} />
    </View>
  );
};

export default Login;

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
