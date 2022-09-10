import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import store,{actions} from '../../store';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const Increment = () => {
      dispatch(actions.increment());
    };
    const Decrement = () => {
      dispatch(actions.decremet());
    };
    const Add = () => {
      dispatch(actions.add(20));
    };
    return (
      <View style={styles.screen}>
        <Text style={styles.heading}>Counter APP</Text>
        <Text style={styles.counter}> {counter}</Text>
  
        <Button title="Increment" onPress={Increment} />
        <Button title="Decrement" onPress={Decrement} />
        <Button title="ADD 10" onPress={Add} />
      </View>);

}

export default Counter

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
      },
      counter: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
      },
})