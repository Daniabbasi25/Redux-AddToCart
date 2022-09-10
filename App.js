import {Button, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import store, {actions} from './store';
import Counter from './src/secreens/Counter';
import Login from './src/secreens/Login';
import Cart from './src/secreens/Cart';
import Dashboard from './src/secreens/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './src/secreens/Signup';

const App = () => {
  const cart=useSelector(state=>state.cart)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isSignup = useSelector(state => state.signUp.isSignup);
  const isCart = useSelector(state => state.viewCart.isCart);
  console.log(isLoggedIn);
  // const cartItems = useSelector(state => state.cart.itemList);
  // console.log(cartItems);
  useEffect(()=>{
    const sendRequest=async ()=>{

     const response=await fetch('https://redux-http-e4294-default-rtdb.firebaseio.com/cartItems.json',{
        method:"PUT",
        body:JSON.stringify(cart)
      });
      const data=await response.json;
    };
    sendRequest();
  },[cart])
  return (
    // <Counter />
    // <Login />

    <View style={styles.screen}>
      {isLoggedIn ? (
        isCart ? (
          <Cart />
        ) : (
          <Dashboard />
        )
      ) : isSignup ? (
        <Signup />
      ) : (
        <Login />
      )}
      {/* {!isLoggedIn && } */}
      {/* {isCart && } */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
