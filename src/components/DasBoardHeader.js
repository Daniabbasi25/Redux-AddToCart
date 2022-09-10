import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from '../../store/auth-slice';

const DasBoardHeader = () => {
  const quantity = useSelector(state => state.cart.totalQuantity);
  const dispatch=useDispatch();
  const handlelogout=()=>{
dispatch(authActions.logout())
  }
  return (
    <View style={styles.headerbox}>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
        Redux Add to Cart
      </Text>
      
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'blue'}}>
        Cart Items#{quantity}
      </Text>
      <TouchableOpacity  style={styles.Button} onPress={handlelogout}>
        <Text style={styles.ButtonText}>
        Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DasBoardHeader;

const styles = StyleSheet.create({
  headerbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
  },
  Button:{
    backgroundColor:'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    
  },
  ButtonText:{
    padding:5,
    color:'#fff'
  }
});
