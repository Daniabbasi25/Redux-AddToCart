import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import ProductBox from '../components/ProductBox';
import Products from '../Products';
import DasBoardHeader from '../components/DasBoardHeader';
import {viewCartActions} from '../../store/viewcart-slice';
import CartBox from '../components/CartBox';

const Cart = () => {
  const Data = useSelector(state => state.cart.itemList);
  const totalprice=useSelector(state=>state.cart.totalprice);
  const dispatch = useDispatch();
  const handleViewCart = () => {
    dispatch(viewCartActions.hide());
  };
  return (
    <View style={styles.mainbox}>
      <DasBoardHeader />
      <View style={styles.flatlist}>
        <FlatList
          data={Data}
          renderItem={({item}) => <CartBox productdata={item} />}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          numColumns={2}
        />
      </View>
      <View style={styles.totalbox}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#000'}}>
          Total Price
        </Text >
        <Text style={{fontSize:25,fontWeight:'bold',color:'green'}}>
          {totalprice}$
        </Text>
      </View>
      <Button title="Go Back" onPress={handleViewCart} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  flatlist: {
    backgroundColor: '#f1f1f1',
    height: 600,
    marginTop: 0,
  },
  totalbox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:20
  }
});
