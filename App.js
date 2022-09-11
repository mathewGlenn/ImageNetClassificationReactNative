/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import  React, {useState} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import {Camera} from 'react-native-pytorch-core';

import classifyImage from './ImageClassifier';

const App = () => {

  async function handleImage(image){

    const result = await classifyImage(image);

    setLabel(result);

    // release the image from memory
    image.release();
  }

  const [label, setLabel] = useState("");


  return (
    <View style={StyleSheet.absoluteFill}>
      <StatusBar translucent backgroundColor="transparent" />
      <Camera style={[StyleSheet.absoluteFill]} 
      onCapture={handleImage}/>

      <View style={styles.labelContainer}>
        <Text style={{color:"#444", fontSize:20}}>Predicted Image:</Text>
        <Text style={{color:"#444", fontSize:17}}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    padding: 20,
    margin: 20,
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default App;
