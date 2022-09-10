import {StyleSheet, Text, Button, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/cart-slice';

const CartBox = (props) => {
    const pdata = props.productdata;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    console.log(pdata.name);
    dispatch(
      cartActions.addToCart({
        name: pdata.name,
        id: pdata.id,
        price: pdata.price,
      }),
    );
  };
  const handleDecrement=()=>{
    console.log(pdata.id)
    dispatch(
        cartActions.removeFromCart(pdata.id)
    )
  }
  return (
    <View style={styles.box}>
      <Text style={styles.productname}>{pdata.name}</Text>
      <Text>{pdata.price}$</Text>
      <Text>{pdata.totalPrice}$</Text>
      <Text>{pdata.quantity}</Text>
      <View style={styles.buttonbox}>

      <Button title="+" onPress={handleAddToCart}  style={styles.button}/>
      <Button title="-" onPress={handleDecrement} style={styles.button}/>
      </View>
    </View>
  );
    
};

export default CartBox

const styles = StyleSheet.create({
    box: {
        width: 160,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 100,
      },
      productname: {
        fontSize: 20,
        color: '#000',
      },
      buttonbox:{
        flexDirection:'row',
        justifyContent:'space-between',
        // gap:20,
        alignItems:'center',
        // backgroundColor:'red',
        width:100
      },
      button:{
        marginHorizontal:2
      },
   
})