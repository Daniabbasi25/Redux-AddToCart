import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import ProductBox from '../components/ProductBox';
import Products from '../Products';
import DasBoardHeader from '../components/DasBoardHeader';
import * as RootNavigation from '../secreens/RootNavigation';
import {viewCartActions} from '../../store/viewcart-slice';
const Dashboard = () => {
  const Data = Products;
  const dispatch = useDispatch();
  const handleViewCart = () => {
    dispatch(viewCartActions.show());
  };
  return (
    <View style={styles.mainbox}>
      <DasBoardHeader />
      <View style={styles.flatlist}>
        <FlatList
          data={Data}
          renderItem={({item}) => <ProductBox productdata={item} />}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          numColumns={2}
        />
      </View>
      <Button title="View Cart" onPress={handleViewCart} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  flatlist: {
    backgroundColor: '#f1f1f1',
    height: 635,
    marginTop: 0,
  },
});
