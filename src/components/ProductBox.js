import {StyleSheet, Text, Button, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/cart-slice';

const ProductBox = props => {
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
  return (
    <View style={styles.box}>
      <Text style={styles.productname}>{pdata.name}</Text>
      <Text>{pdata.price}$</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
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
});
